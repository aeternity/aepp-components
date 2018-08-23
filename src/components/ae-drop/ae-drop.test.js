/**
 * Importing Tools
 */
// import AeDrop from './ae-drop.vue'
import install from './index'
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-drop', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function')
  })
})
