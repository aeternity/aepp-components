<template>
  <div class="ae-header">
    <header class="desktop">
      <ae-link to="/">
        <img :src="require('../../assets/logo-small.png')" alt="Go to main page" />
        {{name}}
      </ae-link>
      <div>
        <!-- The content of the right side on desktop -->
        <slot />
      </div>
    </header>
    <header class="phone">
      <div>
        <!-- The content of the left side on mobile -->
        <slot name="mobile-left" />
      </div>
      <ae-link to="/">
        {{name}}
      </ae-link>
      <div>
        <!-- The content of the right side on mobile -->
        <slot name="mobile-right" />
      </div>
    </header>
  </div>
</template>

<script>
  import AeLink from '../aeLink/aeLink.vue'

  /**
   * Header of aepplication
   */
  export default {
    name: 'ae-header',
    components: { AeLink },
    props: {
      /**
       * Name of aepplication
       */
      name: String
    }
  }
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ae-header {
    header {
      height: 65px;
      max-width: $container-width;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      @media (max-width: $container-width) {
        padding: 0 14px;
      }

      > .ae-link {
        line-height: 24px;
        text-decoration: none;
        font-weight: bold;
        font-size: 20px;

        img {
          height: 24px;
          display: inline-block;
          vertical-align: bottom;
          margin-right: 15px;
        }
      }

      .ae-header-button {
        margin: 0 5px;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    @media (max-width: $screen-phone) {
      header {
        margin-bottom: 20px;

        &.desktop {
          display: none;
        }

        > .ae-link {
          color: $anthracite;
        }
      }
    }

    @media (min-width: $screen-phone + 1) {
      background-image: linear-gradient(to bottom, $anthracite, $aubergine);
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);

      header {
        margin-bottom: 30px;

        &.phone {
          display: none;
        }

        > .ae-link {
          color: $white;
        }
      }
    }
  }
</style>
