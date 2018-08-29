/**
 * TODO: Splash Screen
 */
export default {
  name: 'ae-splash',
  props: {
    /**
     * Fill property changes the color state of the splash screen
     * select something between: `neutral, default, emphasis, alternative, white, black, inherit`
     */
    fill: String,

    /**
     * Face applies a font-style to the current text
     * expects one of the following values:
     */
    face: {
      type: String,
      validator: function (value) {
        return [].indexOf(value) !== -1;
      }
    },

    /**
     * Aligns the text `left, center, right`
     */
    align: {
      type: String,
      validator: function (value) {
        return [].indexOf(value) !== 1;
      }
    }
  }
};
