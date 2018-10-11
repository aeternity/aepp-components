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
     * `primary, secondary, neutral, alternative`
     */
    fill: {
      type: String,
      validator: value => [
        'primary',
        'secondary',
        'neutral',
        'alternative',
      ].includes(value),
    },

    /**
     * Aligns the items in the main container,
     * available values: `top, center, bottom`
     */
    align: {
      type: String,
      validator: value => [
        'top',
        'center',
        'bottom',
      ].includes(value),
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/variables/colors';
@import '../../styles/placeholders/typography';

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

.ae-card.primary {
  background: $color-primary;
  color: $color-primary-negative-3;
}

.ae-card.secondary {
  background: $color-secondary;
  color: $color-secondary-negative-3;
}

.ae-card.neutral {
  background: $color-neutral-negative-3;
  color: $color-white;
}

.ae-card.alternative {
  background: $color-alternative;
  color: $color-alternative-negative-3;
}

.ae-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem 0 1rem;
  margin-bottom: 1rem;
}

.ae-card-header-avatar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: auto;

  > .ae-identicon {
    margin-right: 0.5rem;
  }
}

.ae-card-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;
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
