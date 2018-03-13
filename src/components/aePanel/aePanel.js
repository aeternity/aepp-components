import AeButton from '../aeButton/aeButton.vue'
import AeIcon from '../aeIcon/aeIcon.vue'
import AeLink from '../aeLink/aeLink.vue'
/**
 *
 */
export default {
  name: 'ae-panel',
  props: {
    /**
     * Where does the Panel link to. its fed to a ae-link.
     */
    to: [String, Object],

    /**
     * The ratio of the progressbar on top between 0 and 1
     */
    ratioTop: { type: Number, required: false },

    /**
     * The ratio of the progressbar on bottom between 0 and 1
     */
    ratioBottom: { type: Number, required: false },

    /**
     * The title displayed in the panel
     */
    title: { type: String, required: false },

    /**
     * This handler is called when the user presses the close button
     */
    closeHandler: { type: Function, required: false }
  },
  components: { AeButton, AeIcon, AeLink },
  methods: {
    progressbarStyle (ratio) {
      const pc = ratio * 100
      return {
        display: typeof ratio === 'number' ? 'block' : 'none',
        backgroundImage: `linear-gradient(to right, var(--maegenta) ${
          pc
        }%, var(--aubergine) ${pc}%)`
      }
    }
  }
}
