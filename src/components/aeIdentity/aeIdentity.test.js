import { shallow, mount } from 'vue-test-utils';
import AeIdentity from './aeIdentity.vue';
import AeIdentityLight from '../aeIdentityLight/aeIdentityLight.vue';
import AeIdentityBackground from '../aeIdentityBackground/aeIdentityBackground.vue';

describe('aeIdentity', () => {
  describe('rendering', () => {
    it('renders a aeIdentityBackground as root element', () => {
      const wrapper = shallow(AeIdentity);
      expect(wrapper.contains(AeIdentityBackground)).toBe(true);
    });

    it('contains a aeIdentityLight', () => {
      const wrapper = mount(AeIdentity);
      expect(wrapper.contains(AeIdentityLight)).toBe(true);
    });

    it('forwards identity prop to aeIdentityLight component', () => {
      const identity = {
        name: 'test',
        address: '0x03489768758974698',
        balance: 0,
      };

      const wrapper = mount(AeIdentity, {
        propsData: identity,
      });

      const main = wrapper.find(AeIdentityLight);
      expect(main.props()).toEqual(expect.objectContaining(identity));
    });

    it('forwards collapsed prop to aeIdentityLight component', () => {
      const test = (collapsed) => {
        const wrapper = mount(AeIdentity, {
          propsData: {
            collapsed,
          },
        });

        const main = wrapper.find(AeIdentityLight);
        expect(main.props().collapsed).toBe(collapsed);
      };

      test(true);
      test(false);
    });

    it('provides a default slot', () => {
      const wrapper = mount(AeIdentity, {
        slots: {
          default: '<div data-default-slot></div>',
        },
      });
      expect(wrapper.contains('[data-default-slot]')).toBe(true);
    });
  });

  describe('events', () => {
    describe('click', () => {
      it('forwards click on aeIdentityLight', () => {
        const wrapper = mount(AeIdentity);

        const main = wrapper.find(AeIdentityLight);
        main.trigger('click');
        const emittedClick = wrapper.emitted('click');
        expect(emittedClick.length).toBe(1);
      });
    });
  });
});
