export default {
  name: 'ae-text',
  props: {
    /**
     * Fill property changes the color state of the toolbar
     * select something between:
     * `neutral, default, emphasis, alternative, white, black, inherit`
     */
    fill: String,

    /**
     * Face applies a font-style to the current text
     * expects one of the following values:
     * `sans-l, sans-base, sans-s, sans-xs`
     * `mono-xl, mono-base, mono-s, mono-xs`
     * `tracked-base, uppercase-base, uppercase-xs`
     */
    face: {
      type: String,
      validator: function (value) {
        return [
          'sans-l',
          'sans-base',
          'sans-s',
          'sans-xs',
          'mono-xl',
          'mono-base',
          'mono-s',
          'mono-xs',
          'tracked-base',
          'uppercase-base',
          'uppercase-xs'
        ].indexOf(value) !== -1;
      }
    },

    /**
     * Aligns the text `left, center, right`
     */
    align: {
      type: String,
      validator: function (value) {
        return [
          'left',
          'right',
          'center'
        ].indexOf(value) !== 1;
      }
    },

    /**
     * Sets the Font weight of the text
     */
    weight: Number,

    /**
     * Manually enable focus styling on the element
     */
    focus: Boolean,

    /**
     * Disabled state of the element
     */
    disabled: Boolean
  }
};
