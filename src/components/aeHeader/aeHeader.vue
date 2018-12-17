<template>
  <div class="ae-header">
    <header>
      <div class="mobile-left">
        <!-- @slot The content of the left side on mobile -->
        <slot name="mobile-left" />
      </div>
      <ae-link class="title" to="/">
        <img :src="require('../../assets/images/logo-small.png')" alt="Go to main page" />
        {{name}}
      </ae-link>
      <div class="desktop-right">
        <!-- @slot The content of the right side on desktop -->
        <slot />
      </div>
      <div class="mobile-right">
        <!-- @slot The content of the right side on mobile -->
        <slot name="mobile-right" />
      </div>
    </header>
  </div>
</template>
<script>
import AeLink from '../aeLink/aeLink.vue';

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
    name: String,
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/fallback/mixins';

.ae-header {
  margin-bottom: 20px;

  @include abovePhone {
    margin-bottom: 30px;
    background-color: $aubergine;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  }

  header {
    height: 65px;
    max-width: $container-width;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include phone {
      position: relative;

      .desktop-right {
        display: none;
      }
    }

    @include abovePhone {
      .mobile-left, .mobile-right {
        display: none;
      }
    }

    @include belowDesktop {
      padding: 0 14px;
    }

    .title {
      line-height: 24px;
      text-decoration: none;
      font-weight: bold;
      font-size: 20px;
      color: $white;

      @include phone {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        color: $anthracite;
      }

      img {
        height: 24px;
        display: inline-block;
        vertical-align: bottom;
        margin-right: 15px;

        @include phone {
          display: none;
        }
      }
    }
  }
}
</style>
