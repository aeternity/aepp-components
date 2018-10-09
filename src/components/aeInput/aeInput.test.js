import { shallow } from 'vue-test-utils';
import AeInput from './aeInput.vue';

describe('AeInput', () => {
  describe('rendering', () => {
    it('renders an inp[ut element', () => {
      const wrapper = shallow(AeInput);
      expect(wrapper.contains('input')).toBe(true);
    });

    it('provides a "left" slot', () => {
      const wrapper = shallow(AeInput, {
        slots: {
          left: '<div data-left-slot></div>',
        },
      });
      expect(wrapper.contains('div[data-left-slot]')).toBe(true);
    });

    it('provides a "right" slot', () => {
      const wrapper = shallow(AeInput, {
        slots: {
          right: '<div data-right-slot></div>',
        },
      });
      expect(wrapper.contains('div[data-right-slot]')).toBe(true);
    });

    it('forwards the id property to the input', () => {
      const id = 'adsfada';
      const wrapper = shallow(AeInput, {
        propsData: { id },
      });
      const input = wrapper.find('input');
      expect(input.element.id).toBe(id);
    });

    it('forwards the placeholder property to the input', () => {
      const placeholder = 'zdffa';
      const wrapper = shallow(AeInput, {
        propsData: { placeholder },
      });
      const input = wrapper.find('input');
      expect(input.element.getAttribute('placeholder')).toBe(placeholder);
    });

    it('forwards the type property to the input', () => {
      const type = 'zdffa';
      const wrapper = shallow(AeInput, {
        propsData: { type },
      });
      const input = wrapper.find('input');
      expect(input.element.type).toBe(type);
    });

    it('forwards the value property to the input', () => {
      const value = 'zdffa';
      const wrapper = shallow(AeInput, {
        propsData: { value },
      });
      const input = wrapper.find('input');
      expect(input.element.value).toBe(value);
    });

    describe('input\'s step attribute', () => {
      const testStep = (type, expected) => {
        const wrapper = shallow(AeInput, {
          propsData: { type },
        });
        const input = wrapper.find('input');
        expect(input.element.getAttribute('step')).toBe(expected);
      };

      it('sets input\'s step attribute to \'any\' if the type property is \'number\'', () => {
        testStep('number', 'any');
      });

      it('omits input\'s step attribute if the type property is NOT \'number\'', () => {
        testStep('text', null);
        testStep('password', null);
        testStep('', null);
        testStep(undefined, null);
      });
    });
  });

  describe('event handling', () => {
    describe('forwarding events', () => {
      it('emits input event when the input triggers one and passes the input\'s value as a payload', () => {
        const value = 'adasdfas';
        const wrapper = shallow(AeInput);
        const input = wrapper.find('input');
        input.element.value = value;
        input.trigger('input');
        const emittedEvent = wrapper.emitted('input');
        expect(emittedEvent[0][0]).toBe(value);
      });
    });
  });
});
