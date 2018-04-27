import mixin from '../../mixins/helper'

/**
 * Displays an App Icon
 */
export default {
  name: 'ae-app-icon',
  mixins: [mixin],
  props: {
    /**
     * src property, location of the icon
     */
    src: {
      required: true,
      type: String
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
