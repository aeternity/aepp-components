/**
 * Importing Libraries
 */
import VueTouch from 'vue-touch'

/**
 * Importing Components
 */
import AeDrop from './ae-drop'

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
  Vue.component('ae-drop', AeDrop)
}

/**
 * Exporting only component
 */
export default AeDrop
