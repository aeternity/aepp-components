import { mount } from 'vue-test-utils';
import AePanel from './aePanel.vue';

describe('AePanel', () => {
  const wrapper = mount(AePanel);

  it('minimal markup test', () => {
    expect(wrapper.html()).toContain('class="ae-panel"');
  });
});
