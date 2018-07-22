/**
 * Importing Components
 */
import AeCheck from './ae-check'

/**
 * Exporting Install function for Vue
 */
export const install = function (Vue) {
  Vue.component('ae-check', AeCheck)
}

/**
 * Exporting only component
 */
export default AeCheck
