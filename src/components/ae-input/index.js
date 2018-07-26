/**
 * Importing Components
 */
import AeInput from './ae-input.vue'

/**
 * Exporting Install function for Vue
 */
export const install = function (Vue) {
  Vue.component('ae-input', AeInput)
}

/**
 * Exporting only component
 */
export default AeInput
