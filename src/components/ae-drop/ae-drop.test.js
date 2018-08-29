import install from './index';

describe('ae-drop', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
