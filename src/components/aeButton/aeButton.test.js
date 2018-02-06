import { shallow } from 'vue-test-utils'
import AeButton from './aeButton.vue'
import AeButtonPlugin from './index'

describe('AeButton', () => {
  const ICON_SELECTOR = '[data-slot="icon"]'
  const LABEL_SELECTOR = '[data-slot="label"]'

  const renderIcon = () => {
    const wrapper = shallow(AeButton, {
      slots: {
        icon: '<div data-slot="icon"></div>'
      }
    })

    return wrapper
  }

  const renderLabel = () => {
    const wrapper = shallow(AeButton, {
      slots: {
        default: '<div data-slot="label"></div>'
      }
    })

    // unfortunately we have to force the update of the computed prop
    wrapper.vm.hasLabel = true
    wrapper.vm.$forceUpdate()

    return wrapper
  }

  it('has an install function', () => {
    expect(AeButtonPlugin).toBeInstanceOf(Function)
  })

  describe('basic rendering', () => {
    it('is a button when to prop is missing', () => {
      const wrapper = shallow(AeButton)
      expect(wrapper.is('button')).toBe(true)
    })

    it('is ae-link when to prop is set', () => {
      const wrapper = shallow(AeButton)
      wrapper.setProps({ to: 'http://example.com' })
      expect(wrapper.is('ae-link')).toBe(true)
    })

    it('renders a "icon" slot', () => {
      const wrapper = renderIcon()
      expect(wrapper.contains(ICON_SELECTOR)).toBe(true)
    })

    it('renders a default slot', () => {
      const wrapper = renderLabel()
      return wrapper.vm.$nextTick().then(() => {
        expect(wrapper.contains(LABEL_SELECTOR)).toBe(true)
      })
    })
  })

  describe('events', () => {
    describe('click', () => {
      it('clicking on icon emits click', () => {
        const wrapper = renderIcon()

        const icon = wrapper.find('[data-slot="icon"]')
        icon.trigger('click')
        expect(wrapper.emitted().click).toBeTruthy()
      })

      it('clicking on label emits click', () => {
        const wrapper = renderLabel()

        wrapper.vm.$nextTick().then(() => {
          console.log(wrapper.html())
          const icon = wrapper.find(LABEL_SELECTOR)
          icon.trigger('click')
          expect(wrapper.emitted().click).toBeTruthy()
        })
      })
    })
  })
})
