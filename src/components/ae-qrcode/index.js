/**
 * Importing Components
 */
import AeQRCode from './ae-qrcode'

/**
 * Exporting Install function for Vue
 */
export const install = function (Vue) {
  Vue.component('ae-qrcode', AeQRCode)
}

/**
 * Exporting only component
 */
export default AeQRCode