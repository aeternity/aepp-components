import { mount } from 'vue-test-utils';
import AePanel from './aePanel.vue';
import AePanelPlugin from './index';

describe('AePanel', () => {
  const wrapper = mount(AePanel);

  it('has an install function', () => {
    expect(AePanelPlugin).toBeInstanceOf(Function);
  });

  it('minimal markup test', () => {
    expect(wrapper.html()).toContain('class="ae-panel"');
  });
});
