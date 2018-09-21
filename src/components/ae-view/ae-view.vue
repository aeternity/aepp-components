<template>
    <div class="ae-view" :class="{ [face]: Boolean(face), visible }">
      <div class="ae-view-header">
        <slot name="header" />
      </div>
      <slot />
    </div>
</template>
<script>
export default {
  name: 'ae-view',
  props: {
    /**
     * The layout and type of the ae-view,
     * available options: `base, frame`
     */
    face: {
      type: String,
      validator: function (value) {
        return [
          'base',
          'frame'
        ].indexOf(value) !== -1;
      }
    },

    /**
     * TODO: write doc
     */
    visible: Boolean
  }
};
</script>
<style lang="scss" scoped>
  .ae-view {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .ae-view.base {
    position: relative;
    background: $color-neutral-positive-2;
  }

  .ae-view.frame {
    position: absolute;
    top: 100%;
    background: $color-neutral-maximum;
    transition: all ease-in-out 1s;

    &.visible {
      top: 68px;
      box-shadow: 0 0 16px $color-shadow-alpha-15;
    }
  }

  .ae-view-header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: rem(68px);
  }
</style>
