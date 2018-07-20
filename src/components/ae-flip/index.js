/**
 * Importing Libraries
 */
import VueTouch from 'vue-touch'

/**
 * Importing Components
 */
import AeFlip from './ae-flip'

/**
 * Exporting Install function for Vue
 */
export const install = function (Vue) {
  /**
   * Installing Libraries
   */
  Vue.use(VueTouch)

  /**
   * Installing Components
   */
  Vue.component('ae-flip', AeFlip)
}

/**
 * Exporting only component
 */
export default AeFlip
