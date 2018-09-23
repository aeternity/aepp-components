<template>
  <div class="ae-card" :class="{ [fill]: Boolean(fill) }">
    <header class="ae-card-header" v-if="$slots.header">
      <div class="ae-card-header-avatar" v-if="$slots.avatar">
        <!-- @slot Card header Avatar slot, wraps the avatar and text in a div -->
        <slot name="avatar" />
      </div>
      <!-- @slot Card header slot, full width with bottom padding -->
      <slot name="header" />
    </header>
    <main class="ae-card-main" :class="{ [align]: Boolean(align) }">
      <!-- @slot default main slot -->
      <slot />
    </main>
    <footer class="ae-card-footer"  v-if="$slots.footer">
      <!-- @slot Full width slot footer of the card -->
      <slot name="footer" />
    </footer>
  </div>
</template>
<script>
export default {
  name: 'ae-card',
  props: {
    /**
     * Fill property changes the color state
     * of the card select something between:
     * `neutral, default, emphasis, alternative`
     */
    fill: {
      type: String,
      validator: function (value) {
        return [
          'neutral',
          'default',
          'alternative',
          'emphasis'
        ].indexOf(value) !== 1;
      }
    },

    /**
     * Aligns the items in the main container,
     * available values: `top, center, bottom`
     */
    align: {
      type: String,
      validator: function (value) {
        return [
          'top',
          'center',
          'bottom'
        ].indexOf(value) !== -1;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
  @import '../../styles/globals';

  .ae-card {
    @extend %face-sans-base;

    user-select: none;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    background: $color-neutral-positive-3;
    color: $color-neutral;
    box-shadow: 0 0 16px $color-shadow-alpha-15;
  }

  .ae-card.neutral {
    background: $color-neutral-negative-3;
    color: $color-white;
  }

  .ae-card.default {
    background: $color-default;
    color: $color-default-negative-3;
  }

  .ae-card.emphasis {
    background: $color-emphasis;
    color: $color-emphasis-negative-3;
  }

  .ae-card.alternative {
    background: $color-alternative;
    color: $color-alternative-negative-3;
  }

  .ae-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: rem(16px) rem(16px) 0 rem(16px);
    margin-bottom: rem(16px);
  }

  .ae-card-header-avatar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: auto;

    > .ae-avatar {
      margin-right: rem(8px);
    }
  }

  .ae-card-main {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: rem(16px);
  }

  .ae-card-main.top {
    align-items: flex-start;
  }

  .ae-card-main.center {
    align-items: center;
  }

  .ae-card-main.bottom {
    align-items: flex-end;
  }

  .ae-card-footer {}
</style>
