<template>
  <component
    :is="to ? 'ae-link' : 'button'"
    class="ae-button"
    :class="cssClass"
    @click="$emit('click', $event)"
    :to="to"
    :disabled="disabled"
  >
    <div v-if="$slots.icon" class="icon">
      <!-- @slot Button icon -->
      <slot name="icon" />
    </div>
    <div v-if="$slots.default" class="label">
      <!-- @slot Button content -->
      <slot />
    </div>
  </component>
</template>
<script>
import deprecated from '../../tools/logs/deprecated';

import AeLink from '../aeLink/aeLink.vue';

const aeButtonTypes = [
  'boring',
  'normal',
  'exciting',
  'dramatic',
];

const aeButtonSizes = [
  'small',
  'medium',
  'large',
];

export default {
  name: 'ae-button',
  mixins: [deprecated],
  components: { AeLink },
  props: {
    /**
     * Type of button, possible values: 'boring', 'normal', 'exciting', 'dramatic'
     */
    type: {
      type: String,
      validator: value => aeButtonTypes.includes(value),
      default: 'normal',
    },
    /**
     * Size of button, possible values: 'small', 'medium', 'large'
     */
    size: {
      type: String,
      validator: value => aeButtonSizes.includes(value),
      default: 'medium',
    },
    disabled: { type: Boolean, default: false },
    invert: { type: Boolean, default: false },
    uppercase: { type: Boolean, default: false },
    plain: { type: Boolean, default: false },
    /**
     * Path to go to when clicked
     */
    to: { type: [String, Object], default: undefined },
  },
  computed: {
    cssClass() {
      const classes = [
        `_size_${this.size}`,
        `_type_${this.type}`,
      ];
      if (this.uppercase) classes.push('_uppercase');
      if (this.invert) classes.push('_invert');
      if (this.disabled) classes.push('_disabled');
      if (this.plain) classes.push('_plain');
      if (this.$slots.icon) classes.push('_has-icon');
      if (this.$slots.default) classes.push('_has-label');
      return classes;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/fallback/variables";

.ae-button {
  display: inline-block;
  border: none;
  border-radius: 100px;
  color: $black;
  background-color: $white;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.11);
  padding: 0;

  &._disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &._type {
    &_boring {
      background-color: $silver;
    }
    &_normal {
      background-color: $grey;
    }
    &_exciting {
      background-color: $aubergine;
      color: $white;
    }
    &_dramatic {
      background-color: $maegenta;
      color: $white;
    }
  }

  &._size {
    @mixin size ($buttonHeight, $fontSize, $iconSize, $labelGap) {
      height: $buttonHeight;
      line-height: $buttonHeight;
      font-size: $fontSize;

      .icon {
        width: $buttonHeight;

        /deep/ {
          .ae-icon, img {
            width: $iconSize;
            height: $iconSize;
          }

          img {
            vertical-align: middle;
          }
        }
      }

      .label {
        padding: 0 $labelGap;
      }

      &._plain {
        .label {
          padding: 0 ($buttonHeight - $fontSize) / 2;
        }

        &._has-icon {
          .label {
            padding-left: $buttonHeight;
          }
        }
      }
    }

    &_small {
      @include size(30px, 14px, 16px, 50px);
    }

    &_medium {
      @include size(50px, 18px, 24px, 55px);
    }

    &_large {
      @include size(80px, 24px, 35px, 105px);
    }
  }

  &._invert._type {
    &_boring {
      color: $silver;
    }
    &_normal {
      color: $grey;
    }
    &_exciting {
      color: $aubergine;
    }
    &_dramatic {
      color: $maegenta;
    }
  }

  &._plain {
    background-color: transparent;
    box-shadow: none;

    &._type {
      &_exciting {
        color: $aubergine;
      }
      &_dramatic {
        color: $maegenta;
      }
    }
  }

  &._uppercase {
    text-transform: uppercase;
  }

  &._has-label .icon {
    position: absolute;
  }

  .icon, .label {
    text-align: center;
  }
}
</style>
