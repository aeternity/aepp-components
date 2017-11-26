import AeAmount from './components/aeAmount'
import AeAmountInput from './components/aeAmountInput'
import AeButton from './components/aeButton'
import AeLabel from './components/aeLabel'
import AeFilterItem from './components/aeFilterItem'
import AeFilterList from './components/aeFilterList'
import AeFilterSeparator from './components/aeFilterSeparator'
import AeHeader from './components/aeHeader'
import AeNotification from './components/aeNotification'
import AeHeaderButton from './components/aeHeaderButton'
import AeIdentity from './components/aeIdentity'
import AeIdentityAvatar from './components/aeIdentityAvatar'
import AeMain from './components/aeMain'
import AeModal from './components/aeModal'
import AeOverlay from './components/aeOverlay'
import AePanel from './components/aePanel'
import AeSwitch from './components/aeSwitch'
import AeAppIcon from './components/aeAppIcon'
import AeIcon from './components/aeIcon'
import AeAddress from './components/aeAddress'
import AeAddressInput from './components/aeAddressInput'

const AeppComponents = {
  AeAmount,
  AeAmountInput,
  AeButton,
  AeLabel,
  AeFilterItem,
  AeFilterList,
  AeFilterSeparator,
  AeHeader,
  AeNotification,
  AeHeaderButton,
  AeIdentity,
  AeIdentityAvatar,
  AeMain,
  AeModal,
  AeOverlay,
  AePanel,
  AeSwitch,
  AeAppIcon,
  AeIcon,
  AeAddress,
  AeAddressInput
}

AeppComponents.install = Vue =>
  Object.keys(AeppComponents)
    .filter(component => component !== 'install')
    .map(component => AeppComponents[component])
    .forEach(Vue.use)

export default AeppComponents

export { default as AeAmount } from './components/aeAmount/aeAmount.vue'
export { default as AeAmountInput } from './components/aeAmountInput/aeAmountInput.vue'
export { default as AeButton } from './components/aeButton/aeButton.vue'
export { default as AeLabel } from './components/aeLabel/aeLabel.vue'
export { default as AeFilterItem } from './components/aeFilterItem/aeFilterItem.vue'
export { default as AeFilterList } from './components/aeFilterList/aeFilterList.vue'
export { default as AeFilterSeparator } from './components/aeFilterSeparator/aeFilterSeparator.vue'
export { default as AeHeader } from './components/aeHeader/aeHeader.vue'
export { default as AeNotification } from './components/aeNotification/aeNotification.vue'
export { default as AeHeaderButton } from './components/aeHeaderButton/aeHeaderButton.vue'
export { default as AeIdentity } from './components/aeIdentity/aeIdentity.vue'
export { default as AeIdentityAvatar } from './components/aeIdentityAvatar/aeIdentityAvatar.vue'
export { default as AeMain } from './components/aeMain/aeMain.vue'
export { default as AeModal } from './components/aeModal/aeModal.vue'
export { default as AeOverlay } from './components/aeOverlay/aeOverlay.vue'
export { default as AePanel } from './components/aePanel/aePanel.vue'
export { default as AeSwitch } from './components/aeSwitch/aeSwitch.vue'
export { default as AeAppIcon } from './components/aeAppIcon/aeAppIcon.vue'
export { default as AeIcon } from './components/aeIcon/aeIcon.vue'
export { default as AeAddress } from './components/aeAddress/aeAddress.vue'
export { default as AeAddressInput } from './components/aeAddressInput/aeAddressInput.vue'

export { default as aeHelperMixin } from './mixins/helper'
