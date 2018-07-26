/**
 * Importing Components
 */
import AeAddress from './ae-address.vue'

/**
 * Exporting Install function for Vue
 */
export const install = function (Vue) {
  Vue.component('ae-address', AeAddress)
}

/**
 * Exporting only component
 */
export default AeAddress
