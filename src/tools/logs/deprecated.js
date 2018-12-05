import { oneLine } from 'common-tags';

/**
 * Deprecated onMount method.
 *
 * Use this mixin when you need to
 * notify the user that this component will
 * be deprecated in a future version
 *
 * @mixin
 */
export default {
  created() {
    if (process.env.NODE_ENV === 'production') return;
    console.warn(oneLine`
      DEPRECATION: The component %s has been deprecated, and it will be removed in a future release,
      please check the documentation (http://aeternity.com/aepp-components/) to make sure you're
      up to date with the new components, and / or if there's a replacement for the current component.
    `, this.$options.name);
  },
};
