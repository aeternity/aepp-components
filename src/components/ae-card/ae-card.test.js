/**
 * Importing Tools
 */
// import AeCard from './ae-card.vue'
import install from './index';
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-card', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
