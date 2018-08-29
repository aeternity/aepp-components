import { install } from './index';

describe('ae-button', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
