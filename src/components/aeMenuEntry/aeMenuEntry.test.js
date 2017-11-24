import { mount } from 'vue-test-utils'
import AeMenuEntry from './aeMenuEntry.vue'
import AeMenuEntryPlugin from './index'

describe('AeMenuEntry', () => {
  const label = 'Foo'

  const wrapper = mount(AeMenuEntry, {
    propsData: {
      link: '/foo',
      label: label
    }
  })

  it('has an install function', () => {
    expect(AeMenuEntryPlugin).toBeInstanceOf(Function)
  })

  it('minimal markup test', () => {
    expect(wrapper.html()).toContain('<div class="ae-menu-entry">')
  })
})
