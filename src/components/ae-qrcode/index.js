/**
 * ae-qrcode
 */
import AeQRCode from './ae-qrcode'

/**
 * ae-qrcode instance
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-qrcode', AeQRCode)
}
