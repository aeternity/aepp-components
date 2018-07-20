/**
 * Importing Components
 */
import AeListItem from './ae-list-item'

/**
 * Exporting Install function for Vue
 */
export const install = function (Vue) {
  Vue.component('ae-list-item', AeListItem)
}

/**
 * Exporting only component
 */
export default AeListItem
