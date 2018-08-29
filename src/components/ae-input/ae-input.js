import { events } from '../../mixins';

export default {
  name: 'ae-input',
  mixins: [events],
  data: function () {
    return { focus: false };
  },
  props: {
    /**
     * ID of the component/input
     */
    id: String,

    /**
     * Temporary text appearing in the input box
     */
    placeholder: String,

    /**
     * Define the type of the input
     */
    type: {
      type: String,
      default: 'text'
    },

    /**
     * Property to define label of input, used to set
     * label
     */
    label: String,

    /**
     * Activates the amount state of the component
     */
    aemount: Boolean,

    /**
     * Activates the Address state of the component
     */
    aeddress: Boolean,

    /**
     * Activates error state of the input field
     */
    error: Boolean
  }
};
