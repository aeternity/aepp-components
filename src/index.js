import './styles/index.scss';

import * as components from './components';

export * as mixins from './mixins';
export * as directives from './directives';
export * as filters from './filters';

export { constants, helper } from './core';

export * from './components';

export default {
  install(Vue) {
    Object
      .entries(components)
      .forEach(
        ([name, component]) => Vue.component(name, component),
      );
  },
};
