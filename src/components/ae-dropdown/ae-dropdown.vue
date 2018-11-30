<template>
    <div class="ae-dropdown" :class="{ active }" v-clickaway="deactivate">
      <button @click="activate" type="button" class="ae-dropdown-button">
        <slot name="button" />
      </button>
      <ul
        class="ae-dropdown-menu"
        :class="{ [direction]: Boolean(direction) }"
        @click.capture="deactivate"
      >
        <slot />
      </ul>
    </div>
</template>
<script>
import { directive as clickaway } from 'vue-clickaway';

export default {
  name: 'ae-dropdown',
  directives: { clickaway },
  data() {
    return { active: false };
  },
  props: {
    /**
     * Direction of the dropped menu
     * `left, right`
     */
    direction: String,
  },
  methods: {
    /**
     * Activates dropdown
     * @public
     */
    activate() {
      this.active = true;
    },

    /**
     * Deactivates dropdown
     * @public
     */
    deactivate() {
      this.active = false;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/globals/functions';
@import '../../styles/globals/mixins';
@import '../../styles/variables/animations';
@import '../../styles/variables/colors';
@import '../../styles/placeholders/typography';

.ae-dropdown {
  position: relative;
  display: inline-block;

  &.active > .ae-dropdown-menu {
    opacity: 1;
    visibility: visible;
    z-index: 500;
  }
}

.ae-dropdown-button {
  user-select: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  transition: all $base-transition-time;
  width: 48px;
  height: 48px;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:active:not(:disabled) {
    opacity: 0.65;
  }
}

.ae-dropdown-menu {
  opacity: 0;
  visibility: hidden;
  z-index: 500;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  right: 0;
  background: $color-white;
  box-shadow: 0 0 16px $color-shadow-alpha-15;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  border-radius: 4px;
  overflow: hidden;
  min-width: 160px;
  transition: all $base-transition-time;

  > li {
    @extend %face-sans-s;

    font-weight: 500;
    list-style: none;
    color: $color-neutral-negative-3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 44px;
    padding: 0 1rem;
    white-space: nowrap;
    cursor: pointer;
  }

  > li .ae-icon {
    margin: 0 0.25rem;
  }

  > li .ae-button, > li a {
    font-weight: 500;
    color: $color-neutral-negative-3;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
  }

  &.left {
    top: 0;
    left: 0;
  }

  &.right {
    top: 0;
    right: 0;
  }
}
</style>
