import * as components from './components';

export default Vue => Object.entries(components)
  .forEach(([name, component]) => Vue.component(name, component));
