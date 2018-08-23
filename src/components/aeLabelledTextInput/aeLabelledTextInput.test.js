import {shallow, mount} from 'vue-test-utils';
import AeLabelledTextInput from './aeLabelledTextInput.vue';
import AeTextInputMoleculePlugin from './index';
import AeValidatedTextInput from '../aeValidatedTextInput/aeValidatedTextInput.vue';
import * as exported from '../../index';

describe('AeLabelledTextInput', () => {
  const createShallowWrapper = (data = {}) => {
    return shallow(AeLabelledTextInput, {
      propsData: data,
      attachToDocument: true
    });
  };

  const createWrapper = (data = {}) => {
    return mount(AeLabelledTextInput, {
      propsData: data
    });
  };
  it('has an install function', () => {
    expect(AeTextInputMoleculePlugin).toBeInstanceOf(Function);
  });

  it('is being exported as AeLabelledTextInput', () => {
    expect(exported.AeLabelledTextInput).toBeTruthy();
  });

  describe('basic rendering', () => {
    it('renders a label element containing the label property value', () => {
      const label = 'lskfjls';
      const wrapper = createShallowWrapper({label});
      const labelWrapper = wrapper.find('label');
      expect(
        labelWrapper.text()
      ).toBe(label);
    });

    it('forwards placeholder prop onto ae-validated-text-input element', () => {
      const placeholder = 'plchldr';
      const wrapper = createShallowWrapper({placeholder});
      const input = wrapper.find(AeValidatedTextInput);
      expect(input.vm.$props.placeholder).toBe(placeholder);
    });

    it('does NOT render a label element when label is not provided', () => {
      const wrapper = createShallowWrapper();
      expect(wrapper.contains('label')).toBe(false);
    });

    it('renders a AeValidatedTextInput', () => {
      const wrapper = createShallowWrapper();
      expect(wrapper.contains(AeValidatedTextInput)).toBe(true);
    });

    it('assigns input a radom id and assigns refers to it in the label\'s for attribute', () => {
      const wrapper = createShallowWrapper({label: 'ada'});
      const label = wrapper.find('label');
      const input = wrapper.find(AeValidatedTextInput);
      const forValue = label.element.getAttribute('for');
      const id = input.vm.$props.inputId;
      expect(forValue).toBe(id + '');
    });

    it('forwards validateOnInput property to input', () => {
      const validateOnInput = 'aedfada';
      const wrapper = createShallowWrapper({validateOnInput});
      const input = wrapper.find(AeValidatedTextInput);
      expect(input.vm.validateOnInput).toBe(validateOnInput);
    });

    it('forwards validateOnBlur property to input', () => {
      const validateOnBlur = 'aedfada';
      const wrapper = createShallowWrapper({validateOnBlur});
      const input = wrapper.find(AeValidatedTextInput);
      expect(input.vm.validateOnBlur).toBe(validateOnBlur);
    });
  });

  describe('event handling', () => {
    it('renders error message when input emits validate event with payload ' +
      'and payload is a defined key of error messages', (done) => {
      const message = 'lkjjl;kjl;k';
      const errorMessages = {
        'err': message
      };
      const wrapper = createShallowWrapper({errorMessages});
      const input = wrapper.find(AeValidatedTextInput);
      input.vm.$emit('validation', 'err');
      wrapper.vm.$nextTick(
        () => {
          const errorMessage = wrapper.vm.$refs.errorMessage;
          expect(errorMessage).toBeTruthy();
          expect(errorMessage.innerHTML.trim()).toEqual(message);
          done();
        }
      );
    });

    it('renders default error message when input emits validate event with payload ' +
      'and payload is NOT a defined key of error messages', (done) => {
      const defaultErrorMessage = 'lkdfjlkjdl';
      const wrapper = createShallowWrapper({defaultErrorMessage});
      const input = wrapper.find(AeValidatedTextInput);
      input.vm.$emit('validation', 'err');
      wrapper.vm.$nextTick(
        () => {
          const errorMessage = wrapper.vm.$refs.errorMessage;
          expect(errorMessage).toBeTruthy();
          expect(errorMessage.innerHTML.trim()).toEqual(defaultErrorMessage);
          done();
        }
      );
    });

    it('does NOT render any error message when input is in a valid state', (done) => {
      const defaultErrorMessage = 'lkdfjlkjdl';
      const wrapper = createShallowWrapper({defaultErrorMessage});
      const input = wrapper.find(AeValidatedTextInput);
      input.vm.$emit('validation', undefined);
      wrapper.vm.$nextTick(
        () => {
          const errorMessage = wrapper.vm.$refs.errorMessage;
          expect(errorMessage).toBeUndefined();
          done();
        }
      );
    });

    it('renders valid message if one was provided through props and no validation error is present', (done) => {
      const validMessage = 'lkdfjlkjdl';
      const wrapper = createShallowWrapper({validMessage});
      const input = wrapper.find(AeValidatedTextInput);
      input.vm.$emit('validation', undefined);
      wrapper.vm.$nextTick(
        () => {
          const validMessageElement = wrapper.vm.$refs.validMessage;
          expect(validMessageElement).toBeTruthy();
          expect(validMessageElement.innerHTML.trim()).toEqual(validMessage);
          done();
        }
      );
    });

    it('does NOT render valid message when an validation error is present', (done) => {
      const validMessage = 'lkdfjlkjdl';
      const wrapper = createShallowWrapper({validMessage});
      const input = wrapper.find(AeValidatedTextInput);
      input.vm.$emit('validation', 'some error');
      wrapper.vm.$nextTick(
        () => {
          const validMessageElement = wrapper.vm.$refs.validMessage;
          expect(validMessageElement).toBeUndefined();
          done();
        }
      );
    });

    it('does NOT render valid message when input is in valid state but a validMessage prop was not provided',
      (done) => {
        const wrapper = createShallowWrapper();
        const input = wrapper.find(AeValidatedTextInput);
        input.vm.$emit('validation', undefined);
        wrapper.vm.$nextTick(
          () => {
            const validMessageElement = wrapper.vm.$refs.validMessage;
            expect(validMessageElement).toBeUndefined();
            done();
          }
        );
      });

    it('passes input event', () => {
      const value = 'afca';
      const wrapper = createShallowWrapper();
      const input = wrapper.find(AeValidatedTextInput);
      input.vm.$emit('input', value);
      const received = wrapper.emitted('input');
      expect(received).toBeTruthy();
      expect(received[0]).toEqual([value]);
    });

    it('passes on validate event', () => {
      const wrapper = createShallowWrapper();
      const input = wrapper.find(AeValidatedTextInput);
      input.vm.$emit('validation', 'errId');
      const received = wrapper.emitted('validation');
      expect(received).toBeTruthy();
      expect(received.length).toBe(1);
      expect(received[0]).toEqual(['errId']);
    });

    it('passes on focus event', () => {
      const wrapper = createShallowWrapper();
      const input = wrapper.find(AeValidatedTextInput);
      input.vm.$emit('focus', 'val');
      const received = wrapper.emitted('focus');
      expect(received).toBeTruthy();
      expect(received.length).toBe(1);
    });

    it('passes on blur event', () => {
      const wrapper = createShallowWrapper();
      const input = wrapper.find(AeValidatedTextInput);
      input.vm.$emit('blur', 'val');
      const received = wrapper.emitted('blur');
      expect(received).toBeTruthy();
      expect(received.length).toBe(1);
      expect(received[0]).toEqual(['val']);
    });
    const testKeyEventForward = (eventName) => {
      const eventData = {
        keyCode: 13,
        key: 'Enter'
      };

      const wrapper = createWrapper();
      const input = wrapper.find('input');
      input.trigger(eventName, eventData);
      const receivedEvent = wrapper.emitted(eventName);
      expect(receivedEvent).toBeTruthy();
      expect(receivedEvent.length).toBe(1);
      // expect(receivedEvent[0][0]).toEqual(eventData)
    };

    it('emits keydown when the input does', () => {
      testKeyEventForward('keydown');
    });

    it('emits keyup when input does', () => {
      testKeyEventForward('keyup');
    });

    it('emits keypress when input does', () => {
      testKeyEventForward('keypress');
    });

    it('clears input when clearRequest is emitted', (done) => {
      const value = 'not empty';
      const wrapper = createShallowWrapper({value});
      const input = wrapper.find(AeValidatedTextInput);
      expect(input.vm.$props.value).toBe(value);
      input.vm.$emit('clearRequest');
      input.vm.$nextTick(() => {
        expect(input.vm.$props.value).toBe('');
        done();
      });
    });

    it('emit input event with empty value when clearRequest is recieved', () => {
      const wrapper = createShallowWrapper();
      const input = wrapper.find(AeValidatedTextInput);
      input.vm.$emit('clearRequest');
      const receivedEvent = wrapper.emitted('input');
      expect(receivedEvent).toBeTruthy();
      expect(receivedEvent.length).toBe(1);
      expect(receivedEvent[0][0]).toBe('');
    });

    it('reacts to value property change', (done) => {
      const value = 'not empty';
      const wrapper = createShallowWrapper();
      const input = wrapper.find(AeValidatedTextInput);
      expect(input.vm.$props.value).toBe('');
      input.setProps({
        value
      });
      input.vm.$nextTick(() => {
        expect(input.vm.$props.value).toBe(value);
        done();
      });
    });
  });
});
