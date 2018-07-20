/**
 * Importing Components
 */
import AeButton from './ae-button'

/**
 * Exporting Install function for Vue
 */
export const install = function (Vue) {
  Vue.component('ae-button', AeButton)
}

/**
 * Exporting only component
 */
export default AeButton
