import { mount } from 'vue-test-utils'
import AeAddressInput from './aeAddressInput.vue'

const testAddress = 'ak$12345678912345678912345678912345678912345678912345'
const testAddressFormatted = 'ak$ 123 456 789 123 456 789 123 456 789 123 456 789 123 456 789 123 45'

describe('AeAddressInput', () => {
  it('formats passed value', () => {
    const wrapper = mount(AeAddressInput, { propsData: { value: testAddress } })
    expect(wrapper.element.value).toBe(testAddressFormatted)
  })

  it('adds prefix on input', () => {
    const wrapper = mount(AeAddressInput)
    wrapper.element.value = 'beef'
    wrapper.trigger('input')

    const emittedValue = wrapper.emitted('input')[0][0]
    expect(emittedValue).toEqual('ak$beef')
    wrapper.setProps({ value: emittedValue })
    expect(wrapper.element.value).toBe('ak$ bee f')
  })

  it('removes non-base58 symbols', () => {
    const wrapper = mount(AeAddressInput)
    const value = 'ak$019AHIJNOPZaklmz'
    wrapper.element.value = value
    wrapper.element.setSelectionRange(value.length, value.length)
    wrapper.trigger('input')

    const emittedValue = wrapper.emitted('input')[0][0]
    expect(emittedValue).toEqual('ak$19AHJNPZakmz')
    wrapper.setProps({ value: emittedValue })
    expect(wrapper.element.value).toBe('ak$ 19A HJN PZa kmz')
  })

  it('emitted input event contains address without space symbols', () => {
    const wrapper = mount(AeAddressInput, { propsData: { value: testAddress } })
    wrapper.element.setSelectionRange(10, 10)
    wrapper.trigger('input')
    expect(wrapper.emitted().input[0][0]).toBe(testAddress)
  })

  it('limits address length', () => {
    const wrapper = mount(AeAddressInput)
    const begin = testAddressFormatted.slice(0, 25)
    const end = testAddressFormatted.slice(25) + 'test'
    wrapper.element.value = begin + end
    wrapper.element.setSelectionRange(begin.length, begin.length)
    wrapper.trigger('input')

    const emittedValue = wrapper.emitted('input')[0][0]
    expect(emittedValue).toEqual(testAddress)
    wrapper.setProps({ value: emittedValue })
    expect(wrapper.element.value).toBe(testAddressFormatted)
  })

  it('backspace can remove the whole value', () => {
    const wrapper = mount(AeAddressInput, { propsData: { value: 'ak$12' } })

    while (wrapper.element.value) {
      const { value } = wrapper.element
      wrapper.element.value = value.slice(0, value.length - 1)
      wrapper.element.setSelectionRange(value.length - 1, value.length - 1)
      wrapper.trigger('input')
      wrapper.setProps({ value: wrapper.emitted('input').pop()[0] })
      expect(wrapper.element.value.length).toBeLessThan(value.length)
    }
  })
})
