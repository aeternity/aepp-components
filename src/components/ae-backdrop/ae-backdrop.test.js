/**
 * Importing Tools
 */
// import AeBackdrop from './ae-backdrop.vue'
import install from './index'
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-backdrop', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function')
  })
})
