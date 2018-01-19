<template>
  <router-link class="ae-link" v-if="useRouterLink" :to="to"><slot /></router-link>
  <a class="ae-link" v-else :href="to" :target="isLinkOnSameHost ? '_self' : '_blank'"><slot /></a>
</template>

<script>
  /**
   * Displays an link using `<a>` or `<router-link>` depending on
   * passed url and availability of router-link
   */
  export default {
    name: 'ae-link',
    props: {
      /**
       * Path to go to when clicked
       */
      to: { type: [String, Object] }
    },
    computed: {
      isLinkOnSameHost () {
        return typeof this.to === 'object' ||
          (new URL(this.to, window.location)).host === window.location.host
      },
      useRouterLink () {
        return this.$options.components['router-link'] && this.isLinkOnSameHost
      }
    }
  }
</script>
