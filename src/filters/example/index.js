/**
 * Importing Libraries
 */
import unit from 'ethjs-unit';

/**
 * Exporting Filter
 */
export default function (value) {
  return unit.fromWei(value.toString(10), 'ether');
}
