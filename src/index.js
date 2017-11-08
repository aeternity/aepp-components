import AeAmount from './components/aeAmount';
import AeBalance from './components/aeBalance';
import AeButton from './components/aeButton';
import AeButton2 from './components/aeButton2';
import AeCategory from './components/aeCategory';
import AeCloseButton from './components/aeCloseButton';
import aeFilterItem from './components/aeFilterItem';
import aeFilterList from './components/aeFilterList';
import aeFilterSeparator from './components/aeFilterSeparator';
import aeHeader from './components/aeHeader';
import aeHeaderAlert from './components/aeHeaderAlert';
import aeHeaderButton from './components/aeHeaderButton';
import AeIdentity from './components/aeIdentity';
import AeIdentityAvatar from './components/aeIdentityAvatar';
import aeMain from './components/aeMain';
import aeModal from './components/aeModal';
import aeOverlay from './components/aeOverlay';
import aePanel from './components/aePanel';

const options = {
	AeAmount,
	AeBalance,
	AeButton,
	AeButton2,
	AeCategory,
	AeCloseButton,
	aeFilterItem,
	aeFilterList,
	aeFilterSeparator,
	aeHeader,
	aeHeaderAlert,
	aeHeaderButton,
	AeIdentity,
	AeIdentityAvatar,
	aeMain,
	aeModal,
	aeOverlay,
	aePanel
};

options.install = (Vue) => {
	for (let component in options) {
		const componentInstaller = options[component];

		if (componentInstaller && component !== 'install') {
			Vue.use(componentInstaller);
		}
	}
};

export default options;
