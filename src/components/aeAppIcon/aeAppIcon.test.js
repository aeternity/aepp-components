import { shallow } from 'vue-test-utils';
import AeAppIcon from './aeAppIcon.vue';

describe('aeAppIcon', () => {
  describe('render', () => {
    it('renders an element with the src property as back ground image', () => {
      const src = 'http:/example.com/someimage.png';
      const wrapper = shallow(AeAppIcon, {
        propsData: { src },
      });

      const image = wrapper.find('.icon-image').element;
      const bgImage = image.style.backgroundImage;
      expect(bgImage).toContain(src);
    });
  });

  describe('events', () => {
    describe('click', () => {
      it('emits click when root element is clicked', () => {
        const wrapper = shallow(AeAppIcon, {
          propsData: { src: '' },
        });
        wrapper.trigger('click');
        const emittedClick = wrapper.emitted().click;
        expect(emittedClick.length).toBe(1);
        const eventArg = emittedClick[0][0];
        expect(eventArg.type).toBe('click');
      });

      it('emits click when icon is clicked', () => {
        const wrapper = shallow(AeAppIcon, {
          propsData: { src: '' },
        });
        wrapper.find('.icon-image').trigger('click');
        const emittedClick = wrapper.emitted().click;
        expect(emittedClick.length).toBe(1);
        const eventArg = emittedClick[0][0];
        expect(eventArg.type).toBe('click');
      });
    });
  });
});
