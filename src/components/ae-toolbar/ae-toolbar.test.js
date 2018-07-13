/**
 * Importing Tools
 */
import AeToolbar from './ae-toolbar.vue'
import install from './index'
import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-toolbar', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function')
  })
})
