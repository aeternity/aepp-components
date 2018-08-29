import install from './index';

describe('ae-address', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
