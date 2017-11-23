import { mount } from 'vue-test-utils'
import AeAmount from './aeAmount.vue'
import AeAmountPlugin from './index.js'

describe('AeAmount', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(AeAmount)

  it('has an install function', () => {
    expect(AeAmountPlugin).toBeInstanceOf(Function);
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<div class="ae-amount">')
    expect(wrapper.contains('input'))
    expect(wrapper.html()).toContain('<span>Æ</span>')
  })

  it('lets you change symbols', () => {
    let newSymbol = 'ETH'
    wrapper.setProps({ symbol: newSymbol })
    expect(wrapper.html()).toContain('<span>' + newSymbol + '</span>')
  })

  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  // it('can add values', () => {
  //   let oldAmount = wrapper.vm.amount
  //   let stepSize = wrapper.vm.step
  //   wrapper.vm.add()
  //   expect(wrapper.vm.amount).toBe(oldAmount + stepSize)
  // })
  //
  // it('can subtract values', () => {
  //   let oldAmount = wrapper.vm.amount
  //   let stepSize = wrapper.vm.step
  //   wrapper.vm.subtract()
  //   expect(wrapper.vm.amount).toBe(oldAmount - stepSize)
  // })

  // it('button should increment the count', () => {
  //   expect(wrapper.vm.amount).toBe(0)
  //   const button = wrapper.find('button')
  //   button.trigger('click')
  //   expect(wrapper.vm.amount).toBe(1)
  // })

  it('should fire an event on incrementing', () => {
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.emitted('input')).toBeTruthy()
    // expect(wrapper.emitted('input')).toBe(wrapper.vm.amount)
  })
})
