<template>
  <div
    class="ae-app-icon app-icon"
    :class="{ 'full-size': fullSize }"
    @click="forwardEvent"
  >
    <div
      :style="cssStyle"
      class="icon-image"
    />
  </div>
</template>
<script>
import mixins from '../../core/mixins/helper';

/**
 * Displays an App Icon
 */
export default {
  name: 'ae-app-icon',
  mixins: [mixins],
  props: {
    /**
     * src property, location of the icon
     */
    src: {
      required: true,
      type: String,
    },
    /**
     * removes space between icon and component
     */
    'full-size': {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssStyle() {
      return {
        'background-image': `url(${this.src})`,
      };
    },
  },
};

</script>
<style lang="scss" scoped>
.app-icon {
  background: #FFFFFF;
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.20);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 10px;
  width: 71px;
  height: 71px;
}

.app-icon.full-size {
  padding: 0;
}

.icon-image {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
</style>
