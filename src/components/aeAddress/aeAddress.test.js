import { mount } from 'vue-test-utils'
// import { shallow } from 'vue-test-utils'
import AeAddress from './aeAddress.vue'
import AeAddressPlugin from './index'

// describe('AeAddress', () => {
//   const wrapper = mount(AeAddress, {
//     propsData: {
//       'address': '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
//       'show-avatar': true,
//       'verified': false
//     }
//   })

//   it('has an install function', () => {
//     expect(AeAddressPlugin).toBeInstanceOf(Function)
//   })

//   it('minimal markup test', () => {
//     expect(wrapper.html()).toContain('class="address"')
//   })
// })
describe('AeAddress', () => {
  it('has an install function', () => {
    expect(AeAddressPlugin).toBeInstanceOf(Function)
  })

  it('minimal markup test', () => {
    const wrapper = mount(AeAddress)
    wrapper.setProps({name:'sam'})
    wrapper.setProps({verified:true})
    expect(wrapper.html()).toContain('class="address"')
    console.log(wrapper.html())
    console.log(wrapper.vm.displayName)
    console.log(wrapper.vm.$data)
  })

  it('render checkmark sign if verified prop is true', () => {
    const wrapper = mount(AeAddress)
    // wrapper.setProps({verified:true})
    // wrapper.setProps({name:'Sam'})
    wrapper.setProps({
      verified: true,
      name: 'Sam'
    })
    expect(wrapper.html()).toContain('class="checkmark"')
  })
})
