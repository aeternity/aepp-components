<template>
  <div class="ae-amount" :class="cssClass">
    <span :class="['value', sizeModifier]">{{value}}</span>
    <span v-if='unit' :class="['unit', sizeModifier]">{{unit}}</span>
  </div>
</template>
<script>
export default {
  name: 'ae-amount',
  props: {
    value: {
    },
    size: {
    },
    color: {
    },
    unit: {
      type: [String, Boolean],
      default: 'eth',
    },
  },
  computed: {
    sizeModifier() {
      return `_size_${this.size}`;
    },
    colorModifier() {
      return `_color_${this.color}`;
    },
    cssClass() {
      return [
        this.sizeModifier,
        this.colorModifier,
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/fallback/variables';

.ae-amount {
  font-weight: 300;
  display: flex;
  align-items: baseline;

  &._color{
    &_grey {
      color: $grey;
    }
    &_dark {
      color: #000;
    }
    &_transparent {
      color: #fff;
      background: none;
    }
    &_white {
      color: #fff;
    }
  }

  &._size{
    &_med {
      font-size: 40px;
    }
    &_large {
      font-size: 60px;
    }
  }
}

.value {
  width: 100%;
  overflow-x: hidden;
  overflow-y: visible;
  text-overflow: ellipsis;
  text-align: right;

  &._size {
    &_med {
      line-height: 1.15em;
    }
    &_large {
      line-height: 1em;
    }
  }
}

.unit {
  display: inline;
  margin-left: 1em;

  &._size {
    &_med {
      font-size: 14px;
    }

    &_large {
      font-size: 20px;
    }
  }
}
</style>
