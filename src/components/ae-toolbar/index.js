/**
 * Importing Components
 */
import AeToolbar from './ae-toolbar.vue'

/**
 * Exporting Install function for Vue
 */
export const install = function (Vue) {
  Vue.component('ae-toolbar', AeToolbar)
}

/**
 * Exporting only component
 */
export default AeToolbar
