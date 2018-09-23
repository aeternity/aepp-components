import { install } from './index';

describe('ae-input', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
