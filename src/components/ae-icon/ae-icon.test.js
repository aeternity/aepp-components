/**
 * Importing Tools
 */
// import AeToolbar from './ae-icon.vue'
import install from './index'
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-icon', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function')
  })
})
