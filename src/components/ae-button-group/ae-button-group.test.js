/**
 * Importing Tools
 */
// import AeButtonGroup from './ae-button-group.vue'
import install from './index';
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-button-group', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
