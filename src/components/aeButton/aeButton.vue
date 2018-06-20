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
import AeLink from '../aeLink/aeLink.vue'

const aeButtonTypes = [
  'boring',
  'normal',
  'exciting',
  'dramatic'
]

const aeButtonSizes = [
  'small',
  'medium',
  'large'
]

export default {
  name: 'ae-button',
  components: { AeLink },
  props: {
    /**
     * Type of button, possible values: 'boring', 'normal', 'exciting', 'dramatic'
     */
    type: {
      type: String,
      validator: value => aeButtonTypes.includes(value),
      default: 'normal'
    },
    /**
     * Size of button, possible values: 'small', 'medium', 'large'
     */
    size: {
      type: String,
      validator: value => aeButtonSizes.includes(value),
      default: 'medium'
    },
    disabled: { type: Boolean, default: false },
    invert: { type: Boolean, default: false },
    uppercase: { type: Boolean, default: false },
    plain: { type: Boolean, default: false },
    /**
     * Path to go to when clicked
     */
    to: { type: [String, Object], default: undefined }
  },
  computed: {
    cssClass () {
      const classes = [
        `_size_${this.size}`,
        `_type_${this.type}`
      ]
      if (this.uppercase) classes.push('_uppercase')
      if (this.invert) classes.push('_invert')
      if (this.disabled) classes.push('_disabled')
      if (this.plain) classes.push('_plain')
      if (this.$slots.default) classes.push('_has-label')
      return classes
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../variables";

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
    @mixin size ($size) {
      height: $size;
      line-height: $size;

      .icon {
        width: $size;
      }
    }

    &_small {
      @include size(30px);
      font-size: 14px;

      .icon /deep/ .ae-icon {
        width: 16px;
        height: 16px;
      }

      .label {
        padding: 0 50px;
      }
    }

    &_medium {
      @include size(50px);
      font-size: 18px;

      .icon /deep/ .ae-icon {
        width: 24px;
        height: 24px;
      }

      .label {
        padding: 0 55px;
      }
    }

    &_large {
      @include size(80px);
      font-size: 24px;

      .icon /deep/ .ae-icon {
        width: 35px;
        height: 35px;
      }

      .label {
        padding: 0 105px;
      }
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
