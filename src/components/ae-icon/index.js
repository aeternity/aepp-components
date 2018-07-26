/**
 * Importing Components
 */
import AeIcon from './ae-icon.vue'

/**
 * Exporting Install function for Vue
 */
export const install = function (Vue) {
  Vue.component('ae-icon', AeIcon)
}

/**
 * Exporting only component
 */
export default AeIcon
