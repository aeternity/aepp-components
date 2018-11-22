<template>
  <div class="ae-address">
    <ae-identicon
      v-if='showAvatar'
      :address='address'
      class="avatar"
    />
    <div>
      <div :class="['name', textIndentModifier]" v-if='name'>
        {{displayName}}
        <ae-icon
          name='check'
          type='dramatic'
          v-if='verified'
          :class="['checkmark', textIndentModifier]"
        />
      </div>
      <div
        :class="['address', textIndentModifier]"
        v-if="size !== 'chunked'"
      >
        {{displayAddress}}
      </div>
      <div
        v-if="size === 'chunked'"
        :class="['chunked-address', textIndentModifier, chunkModifier]"
        v-remove-spaces-on-copy
      >
        <div v-for="(chunk, idx) of displayAddress" :key="idx" class="chunk">
          {{chunk}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AeIdenticon from '../ae-identicon/ae-identicon.vue';
import aeIcon from '../aeIcon/aeIcon.vue';
import removeSpacesOnCopy from '../../directives/removeSpacesOnCopy';

function startAndEnd(str, start = 6, end = 6) {
  return `${str.substr(0, start + 2)}…${str.substr(str.length - end, str.length)}`;
}

/**
 * Displays an Address and an optional blockie avatar
 */
export default {
  name: 'ae-address',
  directives: { removeSpacesOnCopy },
  props: {
    /**
     * The address to display. The validity is checked by a regex
     */
    address: {
      type: String,
      required: true,
    },

    /**
     * Whether to show an avatar in front of the address
     */
    'show-avatar': {
      type: Boolean,
      default: false,
    },

    /**
     * Show the 'full' address, 'chunked' (full address grouped by chunks )
     * or 'short' (show first 6 and last 6 characters)
     */
    size: {
      type: String,
      default: 'full',
    },
    /**
     * Show the account name
     */
    name: {
      type: String,
      required: false,
    },
    /**
     * show verified checkmark if name or address is recognized/registered
     */
    verified: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * show full address splitted into 2 colums
     */
    chunkHalf: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    displayAddress() {
      if (this.size === 'full') {
        return this.address;
      }
      if (this.size === 'chunked') {
        return this.address.match(/.{1,7}/g);
      }
      return startAndEnd(this.address);
    },
    displayName() {
      return this.name;
    },
    textIndentModifier() {
      return `_text-indent_${this.showAvatar}`;
    },
    chunkModifier() {
      return `_chunk-half_${this.chunkHalf}`;
    },
  },
  components: {
    AeIdenticon,
    aeIcon,
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/fallback/mixins';

$text-indent: 14px;

@mixin textIndentModifier ($falseVal, $trueVal) {
  &._text-indent {
    &_false{
      margin-left: $falseVal;
    }
    &_true {
      margin-left: $trueVal;
    }
  }
}

%address-font {
  letter-spacing: 2.1px;
}

.ae-address {
  display: flex;
  align-items:center;
  font-family: 'Roboto Mono', monospace;
  font-size: 13px;

  .address {
    @extend %address-font;
    @include textIndentModifier(0px, $text-indent)
  }

  .name {
    @include textIndentModifier(0px, $text-indent);
    display: flex;
    align-items: center;
    letter-spacing: 1.7px;
    text-overflow: ellipsis;
    text-transform: uppercase;
  }

  .avatar {
    flex-shrink: 0;
    margin-right: 10px;
    height: 54px !important;
    width: 54px !important;
  }

  .chunked-address {
    @include textIndentModifier(-10px, $text-indent - 10px);
    display: flex;
    flex-wrap: wrap;
    margin-top: -9px;
    max-width: 320px;
  }

  .chunked-address .chunk {
    @extend %address-font;
    margin: 9px 0 0 10px;
    width: calc(100% * (1/3) - 10px - 1px);
    justify-content: space-between;
    text-align: left;
  }

  @include phone {
    .chunk {
      letter-spacing: 0;
    }
  }

  ._chunk-half_true .chunk {
    width: calc(100% * (1/3));
  }
}
</style>
