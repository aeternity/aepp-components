/**
 * Importing all components
 */
import AeAddress from './ae-address';
import AeAvatar from './ae-avatar';
import AeBackdrop from './ae-backdrop';
import AeBadge from './ae-badge';
import AeButton from './ae-button';
import AeCard from './ae-card';
import AeCheck from './ae-check';
import AeDropdown from './ae-dropdown';
import AeFlip from './ae-flip';
import AeIcon from './ae-icon';
import AeInput from './ae-input';
import AeList from './ae-list';
import AeListItem from './ae-list-item';
import AeQRCode from './ae-qrcode';
import AeText from './ae-text';
import AeToolbar from './ae-toolbar';

/**
 * Generating an object with references
 * to the components
 */
const components = {
  AeAddress,
  AeAvatar,
  AeBackdrop,
  AeBadge,
  AeButton,
  AeCard,
  AeCheck,
  AeDropdown,
  AeFlip,
  AeIcon,
  AeInput,
  AeList,
  AeListItem,
  AeQRCode,
  AeText,
  AeToolbar,
};

/**
 * Generating install function
 * @param {Vue} Vue
 * @return {*}
 */
components.install = function (Vue) {
  return Object
    .keys(components)
    .filter(component => component !== 'install')
    .map(component => components[component])
    .forEach(Vue.use.bind(Vue));
};

/**
 * Exporting reference list
 */
export default components;
