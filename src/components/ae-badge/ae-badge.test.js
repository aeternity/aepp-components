/**
 * Importing Tools
 */
// import AeBadge from './ae-badge.vue'
import install from './index';
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-badge', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
