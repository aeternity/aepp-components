/*
 *arrow
 *burger
 *check
 *chevron
 *close
 *error
 *info
 */

export default {
  name: 'ae-icon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    iconUrl () {
      return require(`../../assets/icons/${this.name}.svg`)
    },
    cssStyle () {
      return {
        'background-image': `url(${this.iconUrl})`
      }
    }

  }
}
