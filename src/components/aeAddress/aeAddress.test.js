import { mount } from 'vue-test-utils'
import AeAddress from './aeAddress.vue'
import AeAddressPlugin from './index'

describe('AeAddress', () => {
  const wrapper = mount(AeAddress, {
    propsData: {
      'address': '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
      'show-avatar': true,
      'verified': true
    }
  })

  it('has an install function', () => {
    expect(AeAddressPlugin).toBeInstanceOf(Function)
  })

  it('minimal markup test', () => {
    expect(wrapper.html()).toContain('class="address"')
  })
  it('if is verify, render checkmark', () => {
    const wrapper = mount(AeAddress, {
    propsData: {
      'address': '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
      'show-avatar': true,
      'verified': true
    }

  })
    // let el = document.getElementsByClassName('checkmark')
    // console.log(el)
    expect(wrapper.html()).toContain('ae-icon')
  })

  // it('only displays avatar if requested', () => {
  //   // console.log(wrapper.html())
  //   wrapper.setProps({ 'show-avatar': false })
  //   // console.log(wrapper.contains(AeIdentityAvatar))
  //   // expect(wrapper.html()).not.toContain('<ae-identity-avatar>')
  //   wrapper.setProps({ 'show-avatar': true })
  //   // console.log(wrapper.contains(AeIdentityAvatar))
  //   // expect(wrapper.html()).toContain('<ae-identity-avatar>')
  // })
})
