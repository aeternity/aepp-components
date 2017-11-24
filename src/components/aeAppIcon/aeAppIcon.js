/**
 * Displays an App Icon
 */
export default {
  name: 'ae-app-icon',
  props: {
    /**
     * The app object, fot this component only the "icon" property is read
     */
    app: {
      type: Object,
      required: true
    }
  }
}
