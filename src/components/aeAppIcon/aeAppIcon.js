/**
 * Displays an App Icon
 */
export default {
  name: 'ae-app-icon',
  props: {
    /**
     * src propery, location of the icon
     */
    src: {
      type: String,
      required: true
    }
  },
  computed: {
    cssStyle () {
      return {
        'background-image': `url(${this.src})`
      }
    }
  }
}
