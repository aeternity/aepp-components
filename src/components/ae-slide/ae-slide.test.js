import { install } from './index';

describe('ae-flip', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
