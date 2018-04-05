import { shallow } from 'vue-test-utils'
import AeAddress from './aeAddress.vue'
import AeAddressPlugin from './index'

describe('AeAddress', () => {
  it('has an install function', () => {
    expect(AeAddressPlugin).toBeInstanceOf(Function)
  })

  describe('rendering', () => {
    it('renders a aeIdentityAvatar when showAvatar prop is true', () => {
      const wrapper = shallow(AeAddress)

      wrapper.setProps({
        showAvatar: true
      })

      expect(wrapper.contains('ae-identity-avatar')).toBe(true)
    })

    it('does NOT render a aeIdentityAvatar when showAvatar prop is false', () => {
      const wrapper = shallow(AeAddress)

      wrapper.setProps({
        showAvatar: false
      })

      expect(wrapper.contains('ae-identity-avatar')).toBe(false)
    })

    it('forwards address prop to ae-identity-avatar', () => {
      const wrapper = shallow(AeAddress)
      const address = '0x392845763248468'

      wrapper.setProps({
        showAvatar: true,
        address
      })

      const avatar = wrapper.find('ae-identity-avatar')
      expect(avatar.element.getAttribute('address')).toBe(address)
    })

    it('renders a checkmark sign if verified prop is true', () => {
      const wrapper = shallow(AeAddress)

      wrapper.setProps({
        verified: true,
        name: 'Test'
      })

      return wrapper.vm.$nextTick().then(() => {
        const checkMark = wrapper.find('[data-checkmark]')
        expect(checkMark.is('ae-icon')).toBe(true)
        expect(checkMark.element.getAttribute('name')).toBe('check')
        expect(checkMark.element.getAttribute('type')).toBe('dramatic')
      })
    })
  })
})
