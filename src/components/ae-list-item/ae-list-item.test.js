/**
 * Importing Tools
 */
// import AeListItem from './ae-list-item.vue'
import install from './index';
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-list-item', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
