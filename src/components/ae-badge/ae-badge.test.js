import install from './index';

describe('ae-badge', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
