/**
 * Importing Libraries
 */
import numeral from 'numeral'

/**
 * Exporting Filter
 */
export default function (value) {
  return numeral(value).format('0,0.[000]')
}
