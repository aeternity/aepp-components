<template>
  <div class="ae-header">
    <header class="desktop">
      <router-link to="/">
        <img :src="require('../../assets/logo-small.png')" alt="Go to main page" />
        {{name}}
      </router-link>
      <div>
        <slot />
      </div>
    </header>
    <header class="phone">
      <div>
        <slot name="mobile-left" />
      </div>
      <router-link to="/">
        {{name}}
      </router-link>
      <div>
        <slot name="mobile-right" />
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: "ae-header",
    props: {
      name: String,
    },
  };
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

      > a {
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
    }

    @media (max-width: $screen-phone) {
      header {
        margin-bottom: 20px;

        &.desktop {
          display: none;
        }

        > a {
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

        > a {
          color: $white;
        }
      }
    }
  }
</style>
