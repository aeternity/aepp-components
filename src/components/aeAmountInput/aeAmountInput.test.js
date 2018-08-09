import { mount } from 'vue-test-utils';
import AeAmountInput from './aeAmountInput.vue';

describe('AeAmountInput', () => {
  it('renders the correct markup', () => {
    const wrapper = mount(AeAmountInput, { propsData: { value: { symbol: 'TEST' } } });
    const html = wrapper.html();
    expect(html).toContain('<div class="ae-amount-input">');
    expect(html).toContain('TEST');
    expect(html).not.toContain('<div class="drop-down">');
    expect(wrapper.contains('input'));
    expect(wrapper.contains('button'));
  });

  it('lets you change symbols', () => {
    const wrapper = mount(AeAmountInput, { propsData: { value: { symbol: 'TEST' } } });
    const symbol = 'TEST';
    wrapper.setProps({ value: { symbol } });
    expect(wrapper.html()).toContain(symbol);
  });

  it('should hide chevron if unit is equal to 1', () => {
    const wrapper = mount(AeAmountInput, { propsData: { value: { symbol: 'TEST' } } });
    wrapper.find('button').trigger('click');
    expect(wrapper.html()).not.toContain('<ae-icon name="chevron" />');
  });

  it('button should toggle drop down', () => {
    const wrapper = mount(AeAmountInput, { propsData: { value: { symbol: 'TEST' } } });
    expect(wrapper.vm.dropDownVisible).toBe(false);
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.dropDownVisible).toBe(true);
    expect(wrapper.html()).toContain('<div class="drop-down">');
  });

  it('should fire an event on token changing', () => {
    const wrapper = mount(AeAmountInput, { propsData: { value: { symbol: 'TEST' } } });
    wrapper.find('button').trigger('click');
    wrapper.find('.drop-down button').trigger('click');
    expect(wrapper.emitted('input')).toBeTruthy();
  });
});
