import AeButton from './components/aeButton';
import AeAmount from './components/aeAmount';
import AeBalance from './components/aeBalance';
import AeIdentity from './components/aeIdentity';
import AeIdentityAvatar from './components/aeIdentityAvatar';
import AeIdentityInfo from './components/aeIdentityInfo';

const options = {
	AeButton,
	AeAmount,
	AeBalance,
	AeIdentity,
	AeIdentityAvatar,
	AeIdentityInfo
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
