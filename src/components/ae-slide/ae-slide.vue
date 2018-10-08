<template>
  <agile class="ae-slide" :options="defaults">
    <slot />
  </agile>
</template>
<script>
import { Agile } from 'vue-agile';

/**
 * The ae-slide uses vue-agile under the hood: https://github.com/lukaszflorczak/vue-agile
 *
 * The option is the configuration object, where you can modify
 * the behavior of the vue-agile.
 *
 * Currently this is a simple wrapper on top of the vue-agile
 * with some stylistic changes, and acts like a interface
 * in case in the future we will have to change / implement our
 * own slider.
 */
export default {
  name: 'ae-slide',
  components: { Agile },
  props: {
    /**
     * You can modify the behavior of the slider
     * using the following options:
     * @link https://github.com/lukaszflorczak/vue-agile#options
     */
    options: Object,
  },
  computed: {
    /**
     * Returns the default object
     * configuration for vue-agile
     * @return {{}}
     */
    defaults() {
      return Object.assign({
        arrows: false,
        infinite: false,
      }, this.options);
    },
  },
};
</script>
<style lang="scss" scoped>
  @import '../../styles/globals';

  .ae-slide {
    position: relative;
    width: 100%;
  }

  .ae-slide /deep/ .agile__slide {
    padding: 20px;
  }

  .ae-slide /deep/ .agile__dots {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    margin: 0;
    padding: 0;
  }

  .ae-slide /deep/ .agile__dots > .agile__dot {
    @include size(10px);

    list-style: none;
    border-radius: 50%;
    background: $color-neutral;
    margin: 0 rem(2px);
    transition: all $base-transition-time;
    cursor: pointer;

    > button {
      background: none;
      height: 100%;
      width: 100%;
      border: none;
    }

    &--current {
      background: $color-primary;
    }
  }
</style>
