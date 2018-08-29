import install from './index';

describe('ae-avatar', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
