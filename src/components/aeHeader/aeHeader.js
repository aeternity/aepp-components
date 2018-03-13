import AeLink from '../aeLink/aeLink.vue'

/**
 * Header of aepplication
 */
export default {
  name: 'ae-header',
  components: { AeLink },
  props: {
    /**
     * Name of aepplication
     */
    name: String
  }
}
