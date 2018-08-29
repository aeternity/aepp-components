import install from './index';

describe('ae-qrcode', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
