import { mount } from 'vue-test-utils';
import AeAddress from './ae-address.vue';

describe('ae-address', () => {
  [{
    address: 'ak_123456789123456789123456789123456789123456789123',
    chunked: [
      'ak_',
      '123', '456', '789',
      '123', '456', '789',
      '123', '456', '789',
      '123', '456', '789',
      '123', '456', '789',
      '123',
    ],
  }, {
    address: 'ak_1234567891234567891234567891234567891234567891234',
    chunked: [
      'ak_',
      '12', '345', '678',
      '912', '345', '678',
      '912', '345', '678',
      '912', '345', '678',
      '912', '345', '678',
      '912', '34',
    ],
  }, {
    address: 'ak_12345678912345678912345678912345678912345678912345',
    chunked: [
      'ak_',
      '12', '345', '678',
      '912', '345', '678',
      '912', '345', '678',
      '912', '345', '678',
      '912', '345', '678',
      '912', '345',
    ],
  }].forEach(({ address, chunked }) => it(`formats address with length ${address.length}`, () => {
    const wrapper = mount(AeAddress, { propsData: { value: address } });
    expect(wrapper.vm.chunked).toEqual(chunked);
  }));
});
