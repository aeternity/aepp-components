import { mount } from 'vue-test-utils'
import AeAddress from './aeAddress.vue'
import aeIcon from './../aeIcon/aeIcon.vue'
import AeAddressPlugin from './index'

describe('AeAddress', () => {
  const wrapper = mount(AeAddress, {
    propsData: {
      'address': '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
      'show-avatar': true,
      'verified': false
    }
  })

  it('has an install function', () => {
    expect(AeAddressPlugin).toBeInstanceOf(Function)
  })

  it('minimal markup test', () => {
    expect(wrapper.html()).toContain('class="address"')
  })
})
