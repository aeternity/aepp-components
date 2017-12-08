import { mount } from 'vue-test-utils'
import AeTextInput from './aeTextInput.vue'
import AeTextInputPlugin from './index'

describe('AeTextInput', () => {
  const createWrapper = (props = {}) => {
    const mountOptions = {
      propsData: props
    }
    return mount(AeTextInput, mountOptions)
  }

  it('has an install function', () => {
    expect(AeTextInputPlugin).toBeInstanceOf(Function)
  })

  describe('rendering', () => {
    it('renders a single input element', () => {
      const wrapper = createWrapper()
      const allInputs = wrapper.findAll('input')
      expect(allInputs.length).toBe(1)
    })

    it('renders the placeholder property as the placeholder attribute of the input element', () => {
      const placeholder = 'bla bla bla'
      const wrapper = createWrapper({placeholder})
      const input = wrapper.find('input')
      expect(input.element.placeholder).toBe(placeholder)
    })

    it('renders the inputId property as the id attribute of the input element', () => {
      const inputId = 'mjhkjh'
      const wrapper = createWrapper({inputId})
      const input = wrapper.find('input')
      expect(input.element.id).toBe(inputId)
    })

    it('renders the value property as the value of the input', () => {
      const value = 'sfdvssdsdf sdfvsdf';
      const wrapper = createWrapper({value})
      const input = wrapper.find('input')
      expect(input.element.value).toBe(value)
    })

    it('renders a ae-button element', () => {
      const wrapper = createWrapper()
      expect(wrapper.contains('button')).toBe(true)
    })
  })

  describe('event handling', () => {
      describe('input event', () => {
        it('triggers an input event with the value attached', () => {
          const value = 'aefqfd';
          const wrapper = createWrapper({value})
          const input = wrapper.find('input')
          input.trigger('input')
          expect(wrapper.emitted().input).toBeTruthy()
          expect(wrapper.emitted().input.length).toBe(1)
          expect(wrapper.emitted().input[0]).toEqual([value])
        })
      })

      describe('blur event', () => {
        it('triggers blur event (with the input\'s value) when input triggers blur event', () => {
          const value = 'safs'
          const wrapper = createWrapper({value})
          const input = wrapper.find('input')
          input.trigger('blur')
          expect(wrapper.emitted().blur).toBeTruthy()
          expect(wrapper.emitted().blur.length).toBe(1)
          expect(wrapper.emitted().blur[0]).toEqual([value])
        })
      })

      describe('focus event', () => {
        it('triggers focus event when input triggers focus event', () => {
          const wrapper = createWrapper()
          const input = wrapper.find('input')
          input.trigger('focus')
          expect(wrapper.emitted().focus).toBeTruthy()
        })
      })

      describe('clearRequest event', () => {
        it('triggers clearRequest event (with the input\'s value) when button is clicked', function(){
          const value = 'asdfsadfds'
          const wrapper = createWrapper({value})
          const button = wrapper.find('button')
          button.trigger('click')
          expect(wrapper.emitted().clearRequest).toBeTruthy()
          expect(wrapper.emitted().clearRequest.length).toBe(1)
          expect(wrapper.emitted().clearRequest[0]).toEqual([value])
        })

        it('does NOT clear input\'s value', () => {
          const value = 'asdfsadfds'
          const wrapper = createWrapper({value})
          const button = wrapper.find('button')
          const input = wrapper.find('input')
          button.trigger('click')
          expect(input.element.value).toBe(value)
        })
      })

      describe('key events', () => {
        const test = eventName => {
          const eventData = {
            keyCode: 13,
            key: 'Enter'
          }
          const wrapper = createWrapper()
          const input = wrapper.find('input')
          input.trigger(eventName, eventData)
          const event = wrapper.emitted(eventName)
          expect(event).toBeTruthy()
          expect(event.length).toBe(1)
          const receivedData = event[0][0]
          expect(receivedData.keyCode).toBe(eventData.keyCode)
          expect(receivedData.key).toBe(eventData.key)
        }

        it('triggers keydown event when input triggers keydown', () => {
          test('keydown')
        })

        it('triggers keyup event when input triggers keyup', () => {
          test('keyup')
        })

        it('triggers keypress event when input triggers keyup', () => {
          test('keypress')
        })
      })
  })
})
