/**
 * Importing Tools
 */
// import AeAvatar from './ae-avatar.vue'
import install from './index';
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-avatar', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
