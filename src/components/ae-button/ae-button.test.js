/**
 * Importing Tools
 */
// import AeButton from './ae-button.vue'
import install from './index';
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-button', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
