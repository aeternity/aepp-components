import { install } from './index';

describe('ae-view', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
