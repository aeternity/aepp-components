import Vue from 'vue'
import { mount } from 'vue-test-utils'
import AeLink from './aeLink.vue'

describe('AeLink', () => {
  it('displays content', () => {
    const content = '<span>test</span>'
    const wrapper = mount(AeLink, { propsData: { to: '/' }, slots: { default: content } })
    expect(wrapper.html()).toContain(content)
  })

  it('renders as `a` if `router-link` is not defined', () => {
    const wrapper = mount(AeLink, { propsData: { to: '/' } })
    expect(wrapper.find('a').exists()).toBeTruthy()
  })

  const testRouterLink = {
    render (createElement) {
      return createElement('test-router-link')
    }
  }

  it('renders as `router-link` if `router-link` is passed in components', () => {
    const wrapper = mount(AeLink, {
      propsData: { to: '/' },
      components: { 'router-link': testRouterLink }
    })
    expect(wrapper.find('test-router-link').exists()).toBeTruthy()
  })

  it('renders as `a` if to is on different domain', () => {
    const wrapper = mount(AeLink, {
      propsData: { to: 'http://example.com/' },
      components: { 'router-link': testRouterLink }
    })
    expect(wrapper.find('a').exists()).toBeTruthy()
  })

  it('renders as `router-link` if `router-link` is registered globally', () => {
    Vue.component('router-link', testRouterLink)
    const wrapper = mount(AeLink, { propsData: { to: '/' } })
    expect(wrapper.find('test-router-link').exists()).toBeTruthy()
    delete Vue.options.components['router-link']
  })
})
