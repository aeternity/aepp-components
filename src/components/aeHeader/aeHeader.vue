<template>
  <div class="ae-header">
    <header class="desktop">
      <ae-link class="title" to="/">
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
      <div class="title-wrapper">
        <ae-link class="title" to="/">
          {{name}}
        </ae-link>
      </div>
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
  @import "../mixins";

  $height: 65px;

  .ae-header {
    header {
      height: $height;
      max-width: $container-width;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      @include belowDesktop {
        padding: 0 14px;
      }

      .title {
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

    @include phone {
      header {
        margin-bottom: 20px;
        position: relative;

        &.desktop {
          display: none;
        }

        :nth-child(odd) {
          z-index: 1;
        }

        .title-wrapper {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          line-height: $height;
          text-align: center;

          .title {
            color: $anthracite;
          }
        }
      }
    }

    @include abovePhone {
      background-color: $aubergine;
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);

      header {
        margin-bottom: 30px;

        &.phone {
          display: none;
        }

        .title {
          color: $white;
        }
      }
    }
  }
</style>
