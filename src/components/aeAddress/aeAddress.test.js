import { mount } from 'vue-test-utils'
import AeAddress from './aeAddress.vue'
import AeAddressPlugin from './index'

describe('AeAddress', () => {
  const wrapper = mount(AeAddress)

  it('has an install function', () => {
    expect(AeAddressPlugin).toBeInstanceOf(Function)
  })

  it('minimal markup test', () => {
    expect(wrapper.html()).toContain('class="address"')
  })
})
