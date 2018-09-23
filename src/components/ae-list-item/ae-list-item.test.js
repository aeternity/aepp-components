import { install } from './index';

describe('ae-list-item', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
