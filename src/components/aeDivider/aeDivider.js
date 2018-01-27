const aeDividerTypes = [
  'boring',
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
  }
}
