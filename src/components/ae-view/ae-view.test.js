/**
 * Importing Tools
 */
// import AeView from './ae-view.vue'
import install from './index';
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-view', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
