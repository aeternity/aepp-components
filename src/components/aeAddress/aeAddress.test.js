import { shallow, mount } from 'vue-test-utils';
import AeAddress from './aeAddress.vue';
import AeIdenticon from '../ae-identicon/ae-identicon.vue';
import AeIcon from '../aeIcon/aeIcon.vue';

const address = '0xfa617481af59ebec80e8d529f1e2d1b3751468f3';

describe('AeAddress', () => {
  describe('rendering', () => {
    it('renders a aeIdentityAvatar when showAvatar prop is true', () => {
      const wrapper = shallow(AeAddress, {
        propsData: {
          address,
          showAvatar: true,
        },
      });

      expect(wrapper.contains(AeIdenticon)).toBe(true);
    });

    it('does NOT render a aeIdentityAvatar when showAvatar prop is false', () => {
      const wrapper = shallow(AeAddress, {
        propsData: {
          address,
          showAvatar: false,
        },
      });

      expect(wrapper.contains(AeIdenticon)).toBe(false);
    });

    it('forwards address prop to ae-identicon', () => {
      const wrapper = shallow(AeAddress, {
        propsData: {
          address,
          showAvatar: true,
        },
      });

      const avatar = wrapper.find(AeIdenticon);
      expect(avatar.props().address).toBe(address);
    });

    it('renders a checkmark sign if verified prop is true', () => {
      const wrapper = mount(AeAddress, {
        propsData: {
          address,
          verified: true,
          name: 'Test',
        },
      });

      const checkMark = wrapper.find(AeIcon);
      expect(checkMark.classes()[0].contains('checkmark')).toBe(true);
      const { name, type } = checkMark.props();
      expect(name).toBe('check');
      expect(type).toBe('dramatic');
    });
  });
});
