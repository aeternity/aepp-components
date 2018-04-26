import {shallow} from 'vue-test-utils'
import AeIndentityMain from './aeIdentityMain.vue'
import BN from 'bn.js'
import AeIdentityAvatar from './../aeIdentityAvatar/aeIdentityAvatar.vue'

describe('AeIdentityMain', () => {
  const _shallow = props => {
    return shallow(AeIndentityMain, {
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
          const balanceWrapper = wrapper.find('.balance:not(.token) .amount')
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
        const balanceWrapper = wrapper.find('.balance.token .amount')
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
        const balanceWrapper = wrapper.find('.balance.token .amount')
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
        const chunks = wrapper.findAll('.chunk')
        expect(chunks.length).toBe(collapsed ? 0 : 6)
      }

      it('renders given address as six chunks when not collapsed', () => {
        test(false)
      })

      it('does NOT render given address as chunks when collapsed', () => {
        test(true)
      })
    })

    describe('truncated address', () => {
      it('renders the first seven characters of the given address when collapsed', () => {
        const address = '0x87678867567856'
        const wrapper = _shallow({
          collapsed: true,
          identity: {
            address,
            balance: new BN('0', 10)
          }
        })
        const truncatedAddress = wrapper.find('.truncated-address')
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
        const truncatedAddress = wrapper.find('.truncated-address')
        expect(truncatedAddress.exists()).toBe(false)
      })
    })
  })

  describe('events', () => {
    describe('click', () => {
      it('emits click when root element is clicked', () => {
        const wrapper = _shallow({
          collapsed: false,
          identity: {
            address: '0x87678867567856',
            balance: new BN('0', 10)
          }
        })

        wrapper.element.dispatchEvent(new Event('click'))
        const emittedClick = wrapper.emitted('click')
        expect(emittedClick.length).toBe(1)
        expect(emittedClick[0][0].type).toBe('click')
      })

      it('emits click when token balance is clicked', () => {
        const wrapper = _shallow({
          collapsed: false,
          identity: {
            address: '0x1234',
            balance: new BN('0', 10),
            tokenBalance: new BN('0', 10)
          }
        })

        const tokenValue = wrapper.find('.balance.token .amount')
        tokenValue.trigger('click')
        const emittedClick = wrapper.emitted('click')
        expect(emittedClick.length).toBe(1)
        expect(emittedClick[0][0].type).toBe('click')
      })
    })

    it('emits click when address chunk is clicked', () => {
      const wrapper = _shallow({
        collapsed: false,
        identity: {
          address: '0x1234' + '123456'.repeat(5),
          balance: new BN('0', 10),
          tokenBalance: new BN('0', 10)
        }
      })

      const chunkList = wrapper.findAll('.chunk')
      const ramdomChunk = chunkList.at(Math.floor(Math.random() * chunkList.length))
      ramdomChunk.trigger('click')
      const emittedClick = wrapper.emitted('click')
      expect(emittedClick.length).toBe(1)
      expect(emittedClick[0][0].type).toBe('click')
    })

    it('forwards click when identity avatar emits click', () => {
      const wrapper = _shallow({ collapsed: false })
      const avatar = wrapper.find(AeIdentityAvatar)
      avatar.trigger('click')
      const emittedClick = wrapper.emitted('click')
      expect(emittedClick.length).toBe(1)
      expect(emittedClick[0][0].type).toBe('click')
    })
  })
})
