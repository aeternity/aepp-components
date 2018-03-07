import { shallow } from 'vue-test-utils'
import AeAppIcon from './aeAppIcon.vue'

describe('aeAppIcon', () => {
  describe('render', () => {
    it('renders an element with the src property as back ground image', () => {
      const src = 'http:/example.com/someimage.png'
      const wrapper = shallow(AeAppIcon, {
        propsData: { src }
      })

      const image = wrapper.vm.$refs.iconImage
      const bgImage = image.style.backgroundImage
      expect(bgImage.indexOf(src)).toBeGreaterThan(-1)
    })
  })

  describe('events', () => {
    describe('click', () => {
      it('emits click when root element is clicked', () => {
        const wrapper = shallow(AeAppIcon, {
          propsData: { src: '' }
        })
        const clickEvent = new Event('click')
        wrapper.element.dispatchEvent(clickEvent)
        const emittedClick = wrapper.emitted().click
        expect(emittedClick.length).toBe(1)
        const eventArg = emittedClick[0][0]
        expect(eventArg.type).toBe('click')
      })

      it('emits click when icon is clicked', () => {
        const wrapper = shallow(AeAppIcon, {
          propsData: { src: '' }
        })
        const iconElement = wrapper.vm.$refs.iconImage
        const clickEvent = new Event('click')
        iconElement.dispatchEvent(clickEvent)
        const emittedClick = wrapper.emitted().click
        expect(emittedClick.length).toBe(1)
        const eventArg = emittedClick[0][0]
        expect(eventArg.type).toBe('click')
      })
    })
  })
})
