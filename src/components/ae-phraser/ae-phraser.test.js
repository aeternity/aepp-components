import { install } from './index';

describe('ae-phraser', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
