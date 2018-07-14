import AeAddress from './ae-address'
import AeAvatar from './ae-avatar'
import AeCard from './ae-card'
import AeFlip from './ae-flip'
import AeIcon from './ae-icon'
import AeQRCode from './ae-qrcode'
import AeToolbar from './ae-toolbar'
// import AeAmount from './aeAmount'
// import AeAmountInput from './aeAmountInput'
// import AeBadge from './aeBadge'
// import AeBanner from './aeBanner'
// import AeButton from './aeButton'
// import AeFilterItem from './aeFilterItem'
// import AeFilterList from './aeFilterList'
// import AeFilterSeparator from './aeFilterSeparator'
// import AeHeader from './aeHeader'
// import AeIdentity from './aeIdentity'
// import AeIdentityAvatar from './aeIdentityAvatar'
// import AeIdentityLight from './aeIdentityLight'
// import AeIdentityBackground from './aeIdentityBackground'
// import AeInput from './aeInput'
// import AeLabel from './aeLabel'
// import AeLink from './aeLink'
// import AeLoader from './aeLoader'
// import AeMain from './aeMain'
// import AeModal from './aeModal'
// import AeModalLight from './aeModalLight'
// import AeOverlay from './aeOverlay'
// import AePanel from './aePanel'
// import AeSwitch from './aeSwitch'
// import AeTextarea from './aeTextarea'
// import AeAppIcon from './aeAppIcon'
// import AeIcon from './aeIcon'
// import AeAddress from './aeAddress'
// import AeAddressInput from './aeAddressInput'
// import AeTextInput from './aeTextInput'
// import AeDivider from './aeDivider'
// import AeLabelledTextInput from './aeLabelledTextInput'

const AeppComponents = {
  AeAddress,
  AeAvatar,
  AeCard,
  AeFlip,
  AeIcon,
  AeQRCode,
  AeToolbar
  // AeAmount,
  // AeAmountInput,
  // AeBadge,
  // AeBanner,
  // AeButton,
  // AeFilterItem,
  // AeFilterList,
  // AeFilterSeparator,
  // AeHeader,
  // AeIdentity,
  // AeIdentityAvatar,
  // AeIdentityLight,
  // AeIdentityBackground,
  // AeInput,
  // AeLabel,
  // AeLink,
  // AeLoader,
  // AeMain,
  // AeModal,
  // AeModalLight,
  // AeOverlay,
  // AePanel,
  // AeSwitch,
  // AeTextarea,
  // AeAppIcon,
  // AeIcon,
  // AeAddress,
  // AeAddressInput,
  // AeTextInput,
  // AeDivider,
  // AeLabelledTextInput
}

AeppComponents.install = Vue =>
  Object
  .keys(AeppComponents)
  .filter(component => component !== 'install')
  .map(component => AeppComponents[component])
  .forEach(Vue.use)

export default AeppComponents
