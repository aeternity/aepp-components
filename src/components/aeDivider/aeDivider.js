const aeDividerTypes = [
  'boring',
  'normal',
  'exciting',
  'dramatic'
]

export default {
  name: 'ae-divider',
  props: {
    type: {
      type: String,
      validator: (value) => aeDividerTypes.find(e => e === value),
      default: 'normal'
    }
  },
  computed: {
    typeModifier () {
      return `ae-divider ${this.type}`
    },
    cssClass () {
      return [
        this.typeModifier
      ]
    }
  }
}
