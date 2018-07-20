/**
 * Importing Components
 */
import AeText from './ae-text'

/**
 * Exporting Install function for Vue
 */
export const install = function (Vue) {
  Vue.component('ae-text', AeText)
}

/**
 * Exporting only component
 */
export default AeText
