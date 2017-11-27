export default {
  name: 'ae-amount',
  props: {
    value: {
    },
    size: {
    },
    color: {
    },
    unit: {
      type : [String, Boolean],
      default : 'eth'
    }
  },
  computed: {
    sizeModifier () {
      return `_size_${this.size}`
    },
    colorModifier () {
      return `_color_${this.color}`
    },
    cssClass() {
      return [
        this.sizeModifier,
        this.colorModifier,
      ]
    }
  }
}
