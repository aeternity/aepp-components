/**
 * An entry in the menu with a label and a link
 */
export default {
  name: 'ae-menu-entry',
  props: {
    /**
     * Where does the menu link to (uses router-link)
     */
    link: {
      type: [String, Object],
      required: true
    },

    /**
     * The title to display
     */
    label: {
      type: String,
      required: true
    }
  }
}
