import { install } from './index';

describe('ae-dropdown', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
