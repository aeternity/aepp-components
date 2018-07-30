/**
 * Importing Tools
 */
// import AePhraser from './ae-phraser.vue'
import install from './index'
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-phraser', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function')
  })
})
