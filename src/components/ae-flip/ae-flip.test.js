/**
 * Importing Tools
 */
// import AeFlip from './ae-flip.vue'
import install from './index'
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-flip', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function')
  })
})
