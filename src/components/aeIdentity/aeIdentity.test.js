import { shallow, mount } from 'vue-test-utils'
import AeIdentity from './aeIdentity.vue'
import AeIdentityMain from '../aeIdentityMain/aeIdentityMain.vue'
import AeAccountBackground from '../aeAccountBackground/aeAccountBackground.vue'
import BN from 'bn.js'

describe('aeIdentity', () => {
  describe('rendering', () => {
    it('renders a aeAccountBackground as root element', () => {
      const wrapper = shallow(AeIdentity)
      expect(wrapper.contains(AeAccountBackground)).toBe(true)
    })

    it('contains a aeIdentityMain', () => {
      const wrapper = mount(AeIdentity)
      expect(wrapper.contains(AeIdentityMain)).toBe(true)
    })

    it('forwards identity prop to aeIdentityMain component', async () => {
      const identity = {
        address: '0x03489768758974698',
        tokenBalance: new BN('0', 10),
        balance: new BN('0', 10)
      }

      const wrapper = mount(AeIdentity, {
        propsData: { identity }
      })

      const main = wrapper.find(AeIdentityMain)
      expect(main.props().identity).toBe(identity)
    })

    it('forwards collapsed prop to aeIdentityMain component', async () => {
      const test = collapsed => {
        const wrapper = mount(AeIdentity, {
          propsData: {
            collapsed
          }
        })

        const main = wrapper.find(AeIdentityMain)
        expect(main.props().collapsed).toBe(collapsed)
      }

      test(true)
      test(false)
    })

    it('provides a default slot', () => {
      const wrapper = mount(AeIdentity, {
        slots: {
          default: '<div data-default-slot></div>'
        }
      })
      expect(wrapper.contains('[data-default-slot]')).toBe(true)
    })
  })

  describe('events', () => {
    describe('click', () => {
      it('forwards click on aeIdentityMain', () => {
        const wrapper = mount(AeIdentity, {
          propsData: {
            identity: {
              address: '0x0',
              tokenBalance: new BN('0', 10),
              balance: new BN('0', 10)
            },
            collapsed: false
          }
        })

        const main = wrapper.find(AeIdentityMain)
        main.trigger('click')
        const emittedClick = wrapper.emitted('click')
        expect(emittedClick.length).toBe(1)
      })
    })
  })
})
