import { install } from './index';

describe('ae-text', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
