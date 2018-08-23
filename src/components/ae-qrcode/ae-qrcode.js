/**
 * Importing Libraries
 */
import QRious from 'qrious';

/**
 * ae-qrcode component
 */
export default {
  /**
   * Component Name
   */
  name: 'ae-qrcode',

  /**
   * Component Props
   */
  props: {
    /**
     * The value of the QR code.
     */
    value: {
      type: null,
      required: true
    },

    /**
     * The options for the QR code generator.
     * https://github.com/neocotic/qrious#api
     */
    options: Object
  },

  /**
   * Component watch properties
   */
  watch: {
    /**
     * Update QR code when options change.
     * @return {*}
     */
    options: function () {
      return this.generate();
    },

    /**
     * Update QR code when value change.
     * @return {*}
     */
    value: function () {
      return this.generate();
    }
  },

  /**
   * Component Methods
   */
  methods: {
    /**
     * Generate QR code
     * @return {QRious}
     */
    generate: function () {
      return new QRious({
        value: String(this.value),
        element: this.$el.querySelector('#code'),
        ...this.options
      });
    }
  },

  /**
   * Component mounted
   * @return {*}
   */
  mounted: function () {
    return this.generate();
  }
};
