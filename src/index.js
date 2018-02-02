import AeAmount from './components/aeAmount'
import AeAmountInput from './components/aeAmountInput'
import AeBadge from './components/aeBadge'
import AeButton from './components/aeButton'
import AeFilterItem from './components/aeFilterItem'
import AeFilterList from './components/aeFilterList'
import AeFilterSeparator from './components/aeFilterSeparator'
import AeHeader from './components/aeHeader'
import AeIdentity from './components/aeIdentity'
import AeIdentityAvatar from './components/aeIdentityAvatar'
import AeInput from './components/aeInput'
import AeLabel from './components/aeLabel'
import AeLink from './components/aeLink'
import AeLoader from './components/aeLoader'
import AeMain from './components/aeMain'
import AeModal from './components/aeModal'
import AeModalLight from './components/aeModalLight'
import AeOverlay from './components/aeOverlay'
import AePanel from './components/aePanel'
import AeSwitch from './components/aeSwitch'
import AeAppIcon from './components/aeAppIcon'
import AeIcon from './components/aeIcon'
import AeAddress from './components/aeAddress'
import AeAddressInput from './components/aeAddressInput'
import AeDivider from './components/aeDivider'
import AeBanner from './components/aeBanner'

const AeppComponents = {
  AeAmount,
  AeAmountInput,
  AeBadge,
  AeButton,
  AeFilterItem,
  AeFilterList,
  AeFilterSeparator,
  AeHeader,
  AeIdentity,
  AeIdentityAvatar,
  AeInput,
  AeLabel,
  AeLink,
  AeLoader,
  AeMain,
  AeModal,
  AeModalLight,
  AeOverlay,
  AePanel,
  AeSwitch,
  AeAppIcon,
  AeIcon,
  AeAddress,
  AeAddressInput,
  AeDivider,
  AeBanner
}

AeppComponents.install = Vue =>
  Object.keys(AeppComponents)
    .filter(component => component !== 'install')
    .map(component => AeppComponents[component])
    .forEach(Vue.use)

export default AeppComponents

export { default as AeAmount } from './components/aeAmount/aeAmount.vue'
export { default as AeAmountInput } from './components/aeAmountInput/aeAmountInput.vue'
export { default as AeBadge } from './components/aeBadge/aeBadge.vue'
export { default as AeButton } from './components/aeButton/aeButton.vue'
export { default as AeFilterItem } from './components/aeFilterItem/aeFilterItem.vue'
export { default as AeFilterList } from './components/aeFilterList/aeFilterList.vue'
export { default as AeFilterSeparator } from './components/aeFilterSeparator/aeFilterSeparator.vue'
export { default as AeHeader } from './components/aeHeader/aeHeader.vue'
export { default as AeIdentity } from './components/aeIdentity/aeIdentity.vue'
export { default as AeIdentityAvatar } from './components/aeIdentityAvatar/aeIdentityAvatar.vue'
export { default as AeInput } from './components/aeInput/aeInput.vue'
export { default as AeLabel } from './components/aeLabel/aeLabel.vue'
export { default as AeLink } from './components/aeLink/aeLink.vue'
export { default as AeLoader } from './components/aeLoader/aeLoader.vue'
export { default as AeMain } from './components/aeMain/aeMain.vue'
export { default as AeModal } from './components/aeModal/aeModal.vue'
export { default as AeModalLight } from './components/aeModalLight/aeModalLight.vue'
export { default as AeOverlay } from './components/aeOverlay/aeOverlay.vue'
export { default as AePanel } from './components/aePanel/aePanel.vue'
export { default as AeSwitch } from './components/aeSwitch/aeSwitch.vue'
export { default as AeAppIcon } from './components/aeAppIcon/aeAppIcon.vue'
export { default as AeIcon } from './components/aeIcon/aeIcon.vue'
export { default as AeAddress } from './components/aeAddress/aeAddress.vue'
export { default as AeAddressInput } from './components/aeAddressInput/aeAddressInput.vue'
export { default as AeDivider } from './components/aeDivider/aeDivider.vue'
export { default as AeBanner } from './components/aeBanner/aeBanner.vue'

export { default as aeHelperMixin } from './mixins/helper'
