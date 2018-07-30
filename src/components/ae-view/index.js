/**
 * Importing Components
 */
import AeView from './ae-view.vue'

/**
 * Exporting Install function for Vue
 */
export const install = function (Vue) {
  Vue.component('ae-view', AeView)
}

/**
 * Exporting only component
 */
export default AeView
