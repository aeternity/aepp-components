import install from './index';

describe('ae-list', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
