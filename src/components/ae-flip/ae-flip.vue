<template>
  <v-touch class="ae-flip-touch-container" @swipeleft="left" @swiperight="right">
    <div class="ae-flip-container" :class="{ [direction]: Boolean(direction) }">
      <div class="ae-flip-flipper">
        <div class="ae-flip-front" v-if="$slots.front">
          <!-- @slot Front side of the container -->
          <slot name="front"/>
        </div>
        <div class="ae-flip-back" v-if="$slots.back">
          <!-- @slot Back side of the container -->
          <slot name="back" />
        </div>
      </div>
      <ul class="ae-flip-bar">
        <li @click="rotation = 0" :class="{ active: rotation === 0 }" />
        <li @click="rotation = 180" :class="{ active: rotation === 180 }" />
      </ul>
    </div>
  </v-touch>
</template>
<script>
import { component } from 'vue-touch';

export default {
  name: 'ae-flip',
  components: { VTouch: component },
  data() {
    return { rotation: 0 };
  },
  computed: {
    /**
     * Compute the direction of the card
     * @return {String}
     */
    direction() {
      if (this.rotation === 0) {
        return false;
      }
      if (this.rotation > 0) {
        return 'left';
      }
      return 'right';
    },
  },
  methods: {
    /**
     * Called when the user swipes left
     * it also emits an event on swipe
     */
    left() {
      if (this.rotation === 180) return;
      this.rotation += 180;
      this.$emit('swipeleft');
    },

    /**
     * Called when the user swipes right
     * it also emits an event on swipe
     */
    right() {
      if (this.rotation === 0) return;
      this.rotation -= 180;
      this.$emit('swiperight');
    },
  },
};
</script>
<style lang="scss" scoped>
  @import '../../styles/globals';

  .ae-flip-touch-container {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .ae-flip-container {
    perspective: rem(1800px);
    height: 100%;
    width: 100%;
  }

  // TODO: Flip 180 or -180 depending on swipe direction
  .ae-flip-container.left .ae-flip-flipper {
    transform: rotateY(-180deg);
  }

  .ae-flip-container.right .ae-flip-flipper {
    transform: rotateY(180deg);
  }

  .ae-flip-container,
  .ae-flip-front,
  .ae-flip-back {
    min-height: 192px;
    width: 100%;
    height: 100%;
  }

  .ae-flip-flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
    height: calc(100% - 20px);
  }

  .ae-flip-front, .ae-flip-back {
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
  }

  .ae-flip-front {
    z-index: $stack-1;
    transform: rotateY(0deg);
  }

  .ae-flip-back {
    transform: rotateY(180deg);
  }

  .ae-flip-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    padding: 0;
    margin: 0;

    > li {
      @include size(10px);

      list-style: none;
      border-radius: 50%;
      background: $color-neutral;
      margin: 0 rem(2px);
      transition: all $base-transition-time;
      cursor: pointer;

      &.active {
        background: $color-emphasis;
      }
    }
  }
</style>
