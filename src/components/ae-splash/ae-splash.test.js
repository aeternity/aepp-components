/**
 * Importing Tools
 */
// import AeSplash from './ae-splash.vue'
import install from './index';
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-splash', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
