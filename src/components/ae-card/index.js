/**
 * Importing Components
 */
import AeCard from './ae-card'

/**
 * Exporting Install function for Vue
 */
export const install = function (Vue) {
  Vue.component('ae-card', AeCard)
}

/**
 * Exporting only component
 */
export default AeCard
