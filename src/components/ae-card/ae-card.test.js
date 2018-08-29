import install from './index';

describe('ae-card', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
