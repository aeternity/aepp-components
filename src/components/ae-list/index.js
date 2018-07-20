/**
 * Importing Components
 */
import AeList from './ae-list'

/**
 * Exporting Install function for Vue
 */
export const install = function (Vue) {
  Vue.component('ae-list', AeList)
}

/**
 * Exporting only component
 */
export default AeList
