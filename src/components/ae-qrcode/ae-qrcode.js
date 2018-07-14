/**
 * Importing Libraries
 */
import QRious from 'qrious'

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
     * The options for the QR code generator.
     * https://github.com/neocotic/qrious#api
     */
    options: Object,

    /**
     * The value of the QR code.
     */
    value: {
      type: null,
      default: 'ae'
    }
  },

  /**
   * Component watch properties
   */
  watch: {
    /**
     * Update QR code when options change.
     */
    options: function () {
      return this.generate()
    },

    /**
     * Update QR code when value change.
     */
    value: function () {
      return this.generate()
    }
  },

  /**
   * Component Methods
   */
  methods: {
    /**
     * Generate QR code
     */
    generate: function () {
      return new QRious({
        value: String(this.value),
        element: this.$el.querySelector('#code'),
        ...this.options
      })
    }
  },

  /**
   * Component mounted
   */
  mounted: function () {
    return this.generate()
  }
}
