/**
 * Importing Tools
 */
// import AeQRCode from './ae-qrcode.vue'
import install from './index';
// import { shallow } from 'vue-test-utils'

/**
 * Test Cases
 */
describe('ae-qrcode', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
