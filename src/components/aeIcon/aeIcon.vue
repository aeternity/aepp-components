<template>
  <span class="ae-icon" :style='style' :class='cssClass' >
    <img :src="iconSvg" alt="">
  </span>
</template>
<script>
import * as iconSvgStrings from '../../assets/icons';

const aeIconTypes = [
  'plain',
  'boring',
  'normal',
  'exciting',
  'dramatic',
];

export default {
  name: 'ae-icon',
  props: {
    /**
     * Name of icon, possible values: 'arrow', 'burger', 'check', 'chevron',
     * 'close', 'copy', 'error', 'info', 'plus', 'refresh', 'view'
     */
    name: {
      type: String,
      required: true,
      validator: value => !!iconSvgStrings[value],
    },
    /**
     * Type of icon, possible values: 'plain', 'boring', 'normal', 'exciting', 'dramatic'
     */
    type: {
      type: String,
      validator: value => aeIconTypes.includes(value),
      default: 'normal',
    },
    invert: {
      type: Boolean,
      default: false,
    },
    /**
     * Rotation of icon in degrees
     */
    rotate: {
      default: 0,
    },
    /**
     * Size of icon, possible values: 'small'
     */
    size: {
      type: String,
      validator: value => ['small'].includes(value),
    },
  },
  computed: {
    cssClass() {
      return [
        `_name_${this.name}`,
        `_type_${this.type}`,
        `_invert_${this.invert}`,
        `_size_${this.size}`,
      ];
    },
    style() {
      return {
        ...this.rotate && { transform: `rotate(${this.rotate}deg)` },
      };
    },
    iconSvg() {
      return iconSvgStrings[this.name];
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/fallback/variables';

.ae-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  vertical-align: middle;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  &._type {
    &_plain {
      fill: $white;
    }

    &_boring {
      fill: $grey;
    }

    &_normal {
      fill: $black;
    }

    &_exciting {
      fill: $aubergine;
    }

    &_dramatic {
      fill: $maegenta;
    }
  }

  &._invert_true._type {
    &_exciting,
    &_dramatic {
      fill: $white;
    }
  }

  &._size_small {
    width: 16px;
    height: 16px;
  }
}
</style>
