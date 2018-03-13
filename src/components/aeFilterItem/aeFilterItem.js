import AeLink from '../aeLink/aeLink.vue'

export default {
  name: 'ae-filter-item',
  components: { AeLink },
  props: {
    /**
     * Path, that will be passed to ae-link
     */
    to: { type: [String, Object], required: false },
    /**
     * Mark the filter item as active
     */
    active: { type: Boolean, required: false }
  }
}
