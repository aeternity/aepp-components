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
import AeIdentity from './components/aeIdentity';
import AeIdentityAvatar from './components/aeIdentityAvatar';
import AeMain from './components/aeMain';
import AeModal from './components/aeModal';
import AeOverlay from './components/aeOverlay';
import AePanel from './components/aePanel';

const options = {
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
  AeIdentity,
  AeIdentityAvatar,
  AeMain,
  AeModal,
  AeOverlay,
  AePanel,
};

options.install = Vue =>
  Object.keys(options)
    .filter(component => component !== 'install')
    .map(component => options[component])
    .forEach(Vue.use);

export default options;
