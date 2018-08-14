import {shallow, mount} from 'vue-test-utils'
import AeTextInput from '../aeTextInput/aeTextInput.vue'
import AeValidatedTextInput from './aeValidatedTextInput.vue'

describe('AeValidatedTextInput', () => {
  const createShallowWrapper = (data = {}) => {
    return shallow(AeValidatedTextInput, {
      propsData: data
    })
  }

  const createWrapper = (data = {}) => {
    return mount(AeValidatedTextInput, {
      propsData: data
    })
  }

  describe('basic rendering', () => {
    it('renders a aeTextInput', () => {
      const wrapper = shallow(AeValidatedTextInput)
      expect(wrapper.contains(AeTextInput)).toBe(true)
    })

    it('forwards placeholder prop onto ae-text-input element', () => {
      const placeholder = 'plchldr'
      const wrapper = createShallowWrapper({placeholder})
      const input = wrapper.find(AeTextInput)
      expect(input.vm.$props.placeholder).toBe(placeholder)
    })

    it('sets inputId property  for the aeTextInput', () => {
      const id = 'asdfas'
      const wrapper = createShallowWrapper({inputId: id})
      const input = wrapper.find(AeTextInput)
      const receivedId = input.vm.inputId
      expect(receivedId).toBe(id)
    })

    it('renders the value prop as the value of the aeTextInput', () => {
      const value = 'flk'
      const wrapper = createShallowWrapper({value})
      const input = wrapper.find(AeTextInput)
      expect(input.vm.value).toBe(value)
    })
  })

  describe('event handling', () => {
    it('emits input event with value when input emits one', () => {
      const value = 'adqd'
      const wrapper = createWrapper({value})
      const input = wrapper.find('input')
      input.trigger('input')
      const receivedEvent = wrapper.emitted('input')
      expect(receivedEvent).toBeTruthy()
      expect(receivedEvent.length).toBe(1)
      expect(receivedEvent[0]).toEqual([value])
    })

    it('emits blur event with value when input emits one', () => {
      const value = 'adqd'
      const wrapper = createWrapper({value})
      const input = wrapper.find('input')
      input.trigger('blur')
      const receivedEvent = wrapper.emitted('blur')
      expect(receivedEvent).toBeTruthy()
      expect(receivedEvent.length).toBe(1)
      expect(receivedEvent[0]).toEqual([value])
    })

    it('emits focus event when input triggers it', () => {
      const wrapper = createWrapper()
      const input = wrapper.find('input')
      input.trigger('focus')
      const receivedEvent = wrapper.emitted('focus')
      expect(receivedEvent).toBeTruthy()
    })

    it('forwards clearRequest event', () => {
      const onClearRequest = jest.fn()
      const value = 'adsfaddd'
      const wrapper = createShallowWrapper({onClearRequest})
      const input = wrapper.vm.$refs.input
      input.$emit('clearRequest', value)
      const received = wrapper.emitted('clearRequest')

      expect(received).toBeTruthy()
      expect(received.length).toBe(1)
      expect(received[0][0]).toBe(value)
    })

    const testKeyEventForward = eventName => {
      const eventData = {
        keyCode: 13,
        key: 'Enter'
      }

      const wrapper = createWrapper()
      const input = wrapper.find('input')
      input.trigger(eventName, eventData)
      const receivedEvent = wrapper.emitted(eventName)
      expect(receivedEvent).toBeTruthy()
      expect(receivedEvent.length).toBe(1)
      // expect(receivedEvent[0][0]).toEqual(eventData)
    }

    it('emits keydown when the input does', () => {
      testKeyEventForward('keydown')
    })

    it('emits keyup when input does', () => {
      testKeyEventForward('keyup')
    })

    it('emits keypress when input does', () => {
      testKeyEventForward('keypress')
    })

    it('emits validation event when input emits input event', () => {
      const wrapper = createWrapper()
      const input = wrapper.find('input')
      input.trigger('input')
      const receivedEvent = wrapper.emitted('validation')
      expect(receivedEvent).toBeTruthy()
    })

    it('attaches validateOnInput call result to validate event when input emits input event', () => {
      const result = 'xaxaxax'
      const validateOnInput = () => result
      const wrapper = createWrapper({validateOnInput})
      const input = wrapper.find('input')
      input.trigger('input')
      const receivedEvent = wrapper.emitted('validation')
      expect(receivedEvent.length).toBe(2)
      expect(receivedEvent[1]).toEqual([result])
    })

    it('emits validation event when input emits blur', () => {
      const wrapper = createWrapper()
      const input = wrapper.find('input')
      input.trigger('blur')
      const receivedEvent = wrapper.emitted('validation')
      expect(receivedEvent).toBeTruthy()
    })

    it('attaches validateOnBlur call result to validate event when input emits blur', () => {
      const result = 'xaxaxax'
      const validateOnBlur = () => result
      const wrapper = createWrapper({validateOnBlur})
      const input = wrapper.find('input')
      input.trigger('blur')
      const receivedEvent = wrapper.emitted('validation')
      expect(receivedEvent.length).toBe(2)
      expect(receivedEvent[1]).toEqual([result])
    })

    it('emits validate when value property changes', () => {
      const wrapper = createWrapper({value: 'sadfs'})
      const initialEvent = wrapper.emitted('validation') || []
      const initialLength = initialEvent.length || 0

      wrapper.setProps({value: '.kj;kj'})
      const receivedEvent = wrapper.emitted('validation')
      expect(receivedEvent).toBeTruthy()
      expect(receivedEvent.length).toBe(initialLength + 1)
    })

    it('sets input\'s hasError property to true when validation on input determines an error', (done) => {
      const result = 'xaxaxax'
      const validateOnInput = () => result
      const wrapper = createShallowWrapper({validateOnInput})
      const input = wrapper.find(AeTextInput)
      input.setProps({hasError: false})
      input.vm.$emit('input', '')
      input.vm.$nextTick(() => {
        expect(input.vm.$props.hasError).toBe(true)
        done()
      })
    })

    it('sets input\'s hasError property to false when validation on input does NOT determine any error', (done) => {
      const validateOnInput = () => undefined
      const wrapper = createShallowWrapper({validateOnInput})
      const input = wrapper.find(AeTextInput)
      input.setProps({hasError: true})
      input.vm.$emit('input', '')
      input.vm.$nextTick(() => {
        expect(input.vm.$props.hasError).toBe(false)
        done()
      })
    })

    it('sets input\'s hasError property to true when validation on blur determines an error', (done) => {
      const result = 'xaxaxax'
      const validateOnBlur = () => result
      const wrapper = createShallowWrapper({validateOnBlur})
      const input = wrapper.find(AeTextInput)
      input.setProps({hasError: false})
      input.vm.$emit('blur', '')
      input.vm.$nextTick(() => {
        expect(input.vm.$props.hasError).toBe(true)
        done()
      })
    })

    it('sets input\'s hasError property to false when validation on input does NOT determine any error', (done) => {
      const validateOnBlur = () => undefined
      const wrapper = createShallowWrapper({validateOnBlur})
      const input = wrapper.find(AeTextInput)
      input.setProps({hasError: true})
      input.vm.$emit('blur', '')
      input.vm.$nextTick(() => {
        expect(input.vm.$props.hasError).toBe(false)
        done()
      })
    })
  })
})
