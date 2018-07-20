/**
 * Importing Fonts
 */
import './icons/icons.font'

/**
 * ae-icon component
 */
export default {
  /**
   * Component Name
   */
  name: 'ae-icon',

  /**
   * Component Properties
   */
  props: {
    /**
     * Name of the icon, please check list of icons in
     * the ./icons folder inside the component
     */
    name: String,

    /**
     * Set manually the size of the font icon
     */
    size: String
  }
}
