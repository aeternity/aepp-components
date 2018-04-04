import { shallow } from 'vue-test-utils'
import AeIdentity from './aeIdentity.vue'
import AeIdentityMain from '../aeIdentityMain/aeIdentityMain.vue'
import BN from 'bn.js'

describe('aeIdentity', () => {
  describe('rendering', () => {
    it('renders a aeAccountBackground as root element', () => {
      const wrapper = shallow(AeIdentity)
      expect(wrapper.is('ae-account-background')).toBe(true)
    })

    it('contains a aeIdentityMain', () => {
      const wrapper = shallow(AeIdentity)
      expect(wrapper.contains('ae-identity-main')).toBe(true)
    })

    it('forwards identity prop to aeIdentityMain component', async () => {
      const identity = {
        address: '0x03489768758974698',
        tokenBalance: new BN('0', 10),
        balance: new BN('0', 10)
      }

      const wrapper = shallow(AeIdentity, {
        stubs: {
          AeIdentityMain
        }
      })

      wrapper.setProps({ identity })

      await wrapper.vm.$nextTick().then(() => {
        const main = wrapper.find(AeIdentityMain)
        expect(main.vm.$props.identity).toBe(identity)
      })
    })

    it('forwards collapsed prop to aeIdentityMain component', async () => {
      const test = collapsed => {
        const wrapper = shallow(AeIdentity, {
          stubs: {
            AeIdentityMain
          }
        })

        wrapper.setProps({ collapsed })

        return wrapper.vm.$nextTick().then(() => {
          const main = wrapper.find(AeIdentityMain)
          expect(main.vm.$props.collapsed).toBe(collapsed)
        })
      }

      await test(true)
      await test(false)
    })

    it('provides a default slot', () => {
      const wrapper = shallow(AeIdentity, {
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
        const wrapper = shallow(AeIdentity, {
          propsData: {
            identity: {
              address: '0x0',
              tokenBalance: new BN('0', 10),
              balance: new BN('0', 10)
            },
            collapsed: false
          },
          stubs: {
            AeIdentityMain
          }
        })

        const main = wrapper.find(AeIdentityMain)
        const stopPropagation = jest.fn()
        const event = { type: 'click', stopPropagation }
        main.vm.$emit('click', event)
        const emittedClick = wrapper.emitted('click')
        expect(emittedClick.length).toBe(1)
        expect(emittedClick[0][0]).toBe(event)
        expect(stopPropagation.mock.calls.length).toBe(1)
      })
    })
  })
})
