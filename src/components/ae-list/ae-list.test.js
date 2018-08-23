/**
 * Importing Tools
 */
// import AeList from './ae-list.vue'
import install from './index'
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-list', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function')
  })
})
