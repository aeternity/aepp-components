import { events } from '@source/mixins';

export default {
  name: 'ae-button',
  mixins: [events],
  props: {
    /**
     * Fill property changes the color state of the button
     * select something between: `neutral, default, emphasis, alternative`
     */
    fill: {
      type: String,
      validator: function (value) {
        return [
          'neutral',
          'default',
          'alternative',
          'emphasis'
        ].indexOf(value) !== 1;
      }
    },

    /**
     * color property changes the text color of the button
     * select something between: `neutral, default, emphasis, alternative`
     */
    color: {
      type: String,
      validator: function (value) {
        return [
          'neutral',
          'default',
          'alternative',
          'emphasis'
        ].indexOf(value) !== 1;
      }
    },

    /**
     * Face applies a shape/form to
     * the current button, available options:
     * `primary, secondary, icon, toolbar`
     */
    face: {
      type: String,
      validator: function (value) {
        return [
          'primary',
          'secondary',
          'icon',
          'toolbar'
        ].indexOf(value) !== 1;
      }
    },

    /**
     * Extend the button full width
     */
    extend: Boolean
  }
};
