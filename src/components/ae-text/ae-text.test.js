/**
 * Importing Tools
 */
// import AeText from './ae-text.vue'
import install from './index'
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-text', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function')
  })
})
