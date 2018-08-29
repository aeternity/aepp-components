/**
 * Importing Tools
 */
// import AeOverScreen from './ae-overscreen.vue'
import install from './index';
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-overscreen', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
