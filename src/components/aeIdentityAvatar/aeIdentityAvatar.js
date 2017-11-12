const blockies = require('ethereum-blockies-png');

export default {
  name: 'avatar',
  props: [
    'address',
  ],
  methods: {
    blockie(address) {
      return blockies.createDataURL({
        seed: address,
      });
    },
  },
  computed: {
    style() {
      if (this.address) {
        return {
          backgroundImage: `url('${this.blockie(this.address)}')`,
        };
      }
      return {
        backgroundColor: '#d1d1d1',
      };
    },
  },
};
