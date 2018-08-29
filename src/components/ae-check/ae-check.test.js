import { install } from './index';

describe('ae-check', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
