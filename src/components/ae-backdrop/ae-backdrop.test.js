import { install } from './index';

describe('ae-backdrop', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
