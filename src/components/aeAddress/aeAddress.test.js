import { mount } from 'vue-test-utils'
import AeAddress from './aeAddress.vue'
import AeAddressPlugin from './index'

describe('AeAddress', () => {
  it('has an install function', () => {
    expect(AeAddressPlugin).toBeInstanceOf(Function)
  })

  it('minimal markup test', () => {
    const wrapper = mount(AeAddress)
    expect(wrapper.html()).toContain('class="aeAddressWrapper"')
  })

  it('render full markup', () => {
    const wrapper = mount(AeAddress)
    wrapper.setProps({
      address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
      name: 'test',
      verified: true
    })
    expect(wrapper.html()).toContain('class="address"')
    expect(wrapper.html()).toContain('class="name"')
    expect(wrapper.html()).toContain('class="checkmark"')
  })

  it('render checkmark sign if verified prop is true', () => {
    const wrapper = mount(AeAddress)
    wrapper.setProps({
      verified: true,
      name: 'Test'
    })
    expect(wrapper.html()).toContain('class="checkmark"')
  })
})
