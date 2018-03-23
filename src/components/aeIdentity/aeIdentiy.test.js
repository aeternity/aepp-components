import {shallow} from 'vue-test-utils'
import AeIndentity from './aeIdentity.vue'
import BN from 'bn.js'
import AeIdentityAvatar from './../aeIdentityAvatar/aeIdentityAvatar.vue'

describe('AeIdentity', () => {
  const _shallow = props => {
    return shallow(AeIndentity, {
      propsData: props
    })
  }

  describe('rendering', () => {
    describe('avatar', () => {
      const test = collapsed => {
        const wrapper = _shallow({ collapsed })
        const avatar = wrapper.find(AeIdentityAvatar)
        expect(avatar.exists()).toBe(true)
      }

      it('renders an identity avatar when not collapsed', () => {
        test(false)
      })

      it('renders an identity avatar when collapsed', () => {
        test(true)
      })
    })

    describe('balance', () => {
      const test = collapsed => {
        const balance = new BN(
          '500000000000000000000000000000', 10
        )
        const wrapper = _shallow({
          collapsed,
          identity: {
            address: '0x0',
            balance
          }
        })

        wrapper.update()
        return wrapper.vm.$nextTick().then(() => {
          const balanceWrapper = wrapper.find('[data-amount]')
          expect(balanceWrapper.text()).toBe('500,000,000,000')
        })
      }

      it('renders the given balance when not collapsed (converted from wei)', () => {
        return test(false)
      })

      it('renders the given balance when collapsed (converted from wei)', () => {
        return test(true)
      })
    })

    describe('token balance', () => {
      it('renders the given balance when not collapsed (converted from wei)', () => {
        const balance = new BN(
          '500000000000000000000000000000', 10
        )
        const wrapper = _shallow({
          collapsed: false,
          identity: {
            address: '0x0',
            balance: new BN('0', 10),
            tokenBalance: balance
          }
        })
        const balanceWrapper = wrapper.find('[data-token-amount]')
        expect(balanceWrapper.text()).toBe('500,000,000,000')
      })

      it('renders 0 token balance when value is missing', () => {
        const wrapper = _shallow({
          collapsed: false,
          identity: {
            address: '0x0',
            balance: new BN('0', 10)
          }
        })
        const balanceWrapper = wrapper.find('[data-token-amount]')
        expect(balanceWrapper.text()).toBe('0')
      })
    })

    describe('chunked address', () => {
      const test = collapsed => {
        const wrapper = _shallow({
          collapsed,
          identity: {
            address: '0x1234' + '123456'.repeat(5),
            balance: new BN('0', 10),
            tokenBalance: new BN('0', 10)
          }
        })
        const chunks = wrapper.findAll('[data-chunk]')
        expect(chunks.length).toBe(collapsed ? 0 : 6)
      }

      it('renders given address as six chunks when not collapsed', () => {
        test(false)
      })

      it('does NOT render given address as chunks when collapsed', () => {
        test(true)
      })
    })
  })

  describe('truncated address', () => {
    it.only('renders the first seven characters of the given address when collapsed', () => {
      const address = '0x87678867567856'
      const wrapper = _shallow({
        collapsed: true,
        identity: {
          address,
          balance: new BN('0', 10)
        }
      })
      const truncatedAddress = wrapper.find('[data-truncated-address]')
      const expected = address.substr(0, 8)
      expect(truncatedAddress.text().includes(expected)).toBe(true)
    })

    it('doe NOT render a truncated address when not collapsed', () => {
      const address = '0x87678867567856'
      const wrapper = _shallow({
        collapsed: false,
        identity: {
          address,
          balance: new BN('0', 10)
        }
      })
      const truncatedAddress = wrapper.find('[data-truncated-address]')
      expect(truncatedAddress.exists()).toBe(false)
    })
  })
})
