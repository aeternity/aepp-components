/**
 * Importing Tools
 */
// import AeCheck from './ae-check.vue'
import install from './index';
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-check', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
