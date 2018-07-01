import AeAmount from './aeAmount'
import AeAmountInput from './aeAmountInput'
import AeBadge from './aeBadge'
import AeBanner from './aeBanner'
import AeButton from './aeButton'
import AeFilterItem from './aeFilterItem'
import AeFilterList from './aeFilterList'
import AeFilterSeparator from './aeFilterSeparator'
import AeHeader from './aeHeader'
import AeIdentity from './aeIdentity'
import AeIdentityAvatar from './aeIdentityAvatar'
import AeIdentityLight from './aeIdentityLight'
import AeIdentityBackground from './aeIdentityBackground'
import AeInput from './aeInput'
import AeLabel from './aeLabel'
import AeLink from './aeLink'
import AeLoader from './aeLoader'
import AeMain from './aeMain'
import AeModal from './aeModal'
import AeModalLight from './aeModalLight'
import AeOverlay from './aeOverlay'
import AePanel from './aePanel'
import AeSwitch from './aeSwitch'
import AeTextarea from './aeTextarea'
import AeAppIcon from './aeAppIcon'
import AeIcon from './aeIcon'
import AeAddress from './aeAddress'
import AeAddressInput from './aeAddressInput'
import AeTextInput from './aeTextInput'
import AeDivider from './aeDivider'
import AeLabelledTextInput from './aeLabelledTextInput'

const AeppComponents = {
  AeAmount,
  AeAmountInput,
  AeBadge,
  AeBanner,
  AeButton,
  AeFilterItem,
  AeFilterList,
  AeFilterSeparator,
  AeHeader,
  AeIdentity,
  AeIdentityAvatar,
  AeIdentityLight,
  AeIdentityBackground,
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
  AeTextarea,
  AeAppIcon,
  AeIcon,
  AeAddress,
  AeAddressInput,
  AeTextInput,
  AeDivider,
  AeLabelledTextInput
}

AeppComponents.install = Vue =>
  Object.keys(AeppComponents)
    .filter(component => component !== 'install')
    .map(component => AeppComponents[component])
    .forEach(Vue.use)

export default AeppComponents

export { default as AeAmount } from './aeAmount/aeAmount.vue'
export { default as AeAmountInput } from './aeAmountInput/aeAmountInput.vue'
export { default as AeBadge } from './aeBadge/aeBadge.vue'
export { default as AeBanner } from './aeBanner/aeBanner.vue'
export { default as AeButton } from './aeButton/aeButton.vue'
export { default as AeFilterItem } from './aeFilterItem/aeFilterItem.vue'
export { default as AeFilterList } from './aeFilterList/aeFilterList.vue'
export { default as AeFilterSeparator } from './aeFilterSeparator/aeFilterSeparator.vue'
export { default as AeHeader } from './aeHeader/aeHeader.vue'
export { default as AeIdentity } from './aeIdentity/aeIdentity.vue'
export { default as AeIdentityLight } from './aeIdentityLight/aeIdentityLight.vue'
export { default as AeIdentityAvatar } from './aeIdentityAvatar/aeIdentityAvatar.vue'
export { default as AeIdentityBackground } from './aeIdentityBackground/aeIdentityBackground.vue'
export { default as AeInput } from './aeInput/aeInput.vue'
export { default as AeLabel } from './aeLabel/aeLabel.vue'
export { default as AeLink } from './aeLink/aeLink.vue'
export { default as AeLoader } from './aeLoader/aeLoader.vue'
export { default as AeMain } from './aeMain/aeMain.vue'
export { default as AeModal } from './aeModal/aeModal.vue'
export { default as AeModalLight } from './aeModalLight/aeModalLight.vue'
export { default as AeOverlay } from './aeOverlay/aeOverlay.vue'
export { default as AePanel } from './aePanel/aePanel.vue'
export { default as AeSwitch } from './aeSwitch/aeSwitch.vue'
export { default as AeTextarea } from './aeTextarea/aeTextarea.vue'
export { default as AeAppIcon } from './aeAppIcon/aeAppIcon.vue'
export { default as AeIcon } from './aeIcon/aeIcon.vue'
export { default as AeAddress } from './aeAddress/aeAddress.vue'
export { default as AeAddressInput } from './aeAddressInput/aeAddressInput.vue'
export { default as AeTextInput } from './aeTextInput/aeTextInput.vue'
export { default as AeDivider } from './aeDivider/aeDivider.vue'
export { default as AeLabelledTextInput } from './aeLabelledTextInput/aeLabelledTextInput'
