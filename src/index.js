import AeAddButton from './components/aeAddButton';
import AeAmount from './components/aeAmount';
import AeBalance from './components/aeBalance';
import AeButton from './components/aeButton';
import AeButton2 from './components/aeButton2';
import AeCategory from './components/aeCategory';
import AeCloseButton from './components/aeCloseButton';
import AeFilterItem from './components/aeFilterItem';
import AeFilterList from './components/aeFilterList';
import AeFilterSeparator from './components/aeFilterSeparator';
import AeHeader from './components/aeHeader';
import AeHeaderAlert from './components/aeHeaderAlert';
import AeHeaderButton from './components/aeHeaderButton';
import AeHr from './components/aeHr';
import AeHrButton from './components/aeHrButton';
import AeIdentity from './components/aeIdentity';
import AeIdentityAvatar from './components/aeIdentityAvatar';
import AeMain from './components/aeMain';
import AeModal from './components/aeModal';
import AeOverlay from './components/aeOverlay';
import AePanel from './components/aePanel';
import AeSwitch from './components/aeSwitch';
import AeMenu from './components/aeMenu';
import AeMenuEntry from './components/aeMenuEntry';
import AeAppIcon from './components/aeAppIcon';
import AeAddress from './components/aeAddress';
import AeAddressInput from './components/aeAddressInput';

const AeppComponents = {
  AeAddButton,
  AeAmount,
  AeBalance,
  AeButton,
  AeButton2,
  AeCategory,
  AeCloseButton,
  AeFilterItem,
  AeFilterList,
  AeFilterSeparator,
  AeHeader,
  AeHeaderAlert,
  AeHeaderButton,
  AeHr,
  AeHrButton,
  AeIdentity,
  AeIdentityAvatar,
  AeMain,
  AeModal,
  AeOverlay,
  AePanel,
  AeSwitch,
  AeMenu,
  AeMenuEntry,
  AeAppIcon,
  AeAddress,
  AeAddressInput
};

AeppComponents.install = Vue =>
  Object.keys(AeppComponents)
    .filter(component => component !== 'install')
    .map(component => AeppComponents[component])
    .forEach(Vue.use);

export default AeppComponents;

export { default as AeAddButton } from './components/aeAddButton/aeAddButton.vue';
export { default as AeAmount } from './components/aeAmount/aeAmount.vue';
export { default as AeBalance } from './components/aeBalance/aeBalance.vue';
export { default as AeButton } from './components/aeButton/aeButton.vue';
export { default as AeButton2 } from './components/aeButton2/aeButton2.vue';
export { default as AeCategory } from './components/aeCategory/aeCategory.vue';
export { default as AeCloseButton } from './components/aeCloseButton/aeCloseButton.vue';
export { default as AeFilterItem } from './components/aeFilterItem/aeFilterItem.vue';
export { default as AeFilterList } from './components/aeFilterList/aeFilterList.vue';
export { default as AeFilterSeparator } from './components/aeFilterSeparator/aeFilterSeparator.vue';
export { default as AeHeader } from './components/aeHeader/aeHeader.vue';
export { default as AeHeaderAlert } from './components/aeHeaderAlert/aeHeaderAlert.vue';
export { default as AeHeaderButton } from './components/aeHeaderButton/aeHeaderButton.vue';
export { default as AeHr } from './components/aeHr/aeHr.vue';
export { default as AeHrButton } from './components/aeHrButton/aeHrButton.vue';
export { default as AeIdentity } from './components/aeIdentity/aeIdentity.vue';
export { default as AeIdentityAvatar } from './components/aeIdentityAvatar/aeIdentityAvatar.vue';
export { default as AeMain } from './components/aeMain/aeMain.vue';
export { default as AeModal } from './components/aeModal/aeModal.vue';
export { default as AeOverlay } from './components/aeOverlay/aeOverlay.vue';
export { default as AePanel } from './components/aePanel/aePanel.vue';
export { default as AeSwitch } from './components/aeSwitch/aeSwitch.vue';
export { default as AeMenuEntry } from './components/aeMenuEntry/aeMenuEntry.vue';
export { default as AeMenu } from './components/aeMenu/aeMenu.vue';
export { default as AeAppIcon } from './components/aeAppIcon/aeAppIcon.vue';
export { default as AeAddress } from './components/aeAddress/aeAddress.vue';
export { default as AeAddressInput } from './components/aeAddressInput/aeAddressInput.vue';

export { default as aeHelperMixin } from './mixins/helper';
