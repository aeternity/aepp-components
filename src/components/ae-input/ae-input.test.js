/**
 * Importing Tools
 */
// import AeInput from './ae-input.vue'
import install from './index';
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-input', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
