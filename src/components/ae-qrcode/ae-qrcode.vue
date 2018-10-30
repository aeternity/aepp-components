<template>
  <div class="ae-qrcode">
    <canvas id="code" />
  </div>
</template>
<script>
import QRious from 'qrious';

export default {
  name: 'ae-qrcode',
  props: {
    /**
     * The value of the QR code.
     */
    value: {
      type: null,
      required: true,
    },

    /**
     * The options for the QR code generator.
     * https://github.com/neocotic/qrious#api
     */
    options: Object,
  },
  watch: {
    /**
     * Update QR code when options change.
     * @return {*}
     */
    options() {
      return this.generate();
    },

    /**
     * Update QR code when value change.
     * @return {*}
     */
    value() {
      return this.generate();
    },
  },
  methods: {
    /**
     * Generate QR code
     * @return {QRious}
     */
    generate() {
      return new QRious({
        value: String(this.value),
        element: this.$el.querySelector('#code'),
        ...this.options,
      });
    },
  },
  mounted() {
    return this.generate();
  },
};
</script>
<style lang="scss" scoped>
.ae-qrcode {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
