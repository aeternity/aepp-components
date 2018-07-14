/**
 * Importing Tools
 */
// import AeAddress from './ae-flip.vue'
import install from './index'
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-address', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function')
  })
})
