/**
 * Importing Components
 */
import AeAvatar from './ae-avatar'

/**
 * Exporting Install function for Vue
 */
export const install = function (Vue) {
  Vue.component('ae-avatar', AeAvatar)
}

/**
 * Exporting only component
 */
export default AeAvatar
