export default {
  name: 'ae-address',
  props: {
    /**
     * ae address value to be displayed
     */
    value: {
      type: String,
      required: true
    },

    /**
     * Set the length of the address
     * valid properties: `medium, short`
     */
    length: String,

    /**
     * Set the grid gab between elements, either px's or rem's
     */
    gap: String
  },
  computed: {
    /**
     * This will chunk the address
     * into values of 3 and return an array
     * @return {[]}
     */
    chunked: function () {
      return this.value.match(/.{1,3}/g);
    }
  }
};
