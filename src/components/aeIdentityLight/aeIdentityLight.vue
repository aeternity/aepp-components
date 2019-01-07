<template>
  <div @click="forwardEvent" :class="classObject">
    <div class="flex-row">
      <ae-identicon class="avatar" :address='address'/>
      <span :class="['identity-name-position', collapsedModifier]">
        <span role="heading" :class="['identity-name', collapsedModifier]">{{name}}</span>
        <small class="truncated-address" v-if="collapsed">{{address | shorten}} ••••••</small>
      </span>
      <div class="balances">
        <div class="balance token">
          <span class="amount">{{balance}}</span>
          <span class="currency-symbol">AE</span>
        </div>
      </div>
    </div>
    <div
      v-if="!collapsed"
      v-for="(chunk, idx) in chunkAddress"
      v-remove-spaces-on-copy
      :key="idx"
      class="chunk-row"
    >
      <div v-for="(data, idx) in chunk" :key="idx" class="chunk">
        {{data}}
      </div>
    </div>
  </div>
</template>
<script>
import AeIdenticon from '../ae-identicon/ae-identicon.vue';
import helperMixin from '../../core/mixins/helper';
import removeSpacesOnCopy from '../../directives/removeSpacesOnCopy';

/**
 * Displays an Identity with an avatar blockie, the address and an amount of ether
 */
export default {
  name: 'ae-identity-light',
  components: { AeIdenticon },
  directives: { removeSpacesOnCopy },
  props: {
    /**
     * An identity name
     */
    name: {
      type: String,
      default: '',
    },
    /**
     * An identity address
     */
    address: {
      type: String,
      default: '0x0',
    },
    /**
     * An identity balance in AE
     */
    balance: {
      type: Number,
      default: 0,
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
    invert: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [
    helperMixin,
  ],
  computed: {
    classObject() {
      return [
        'ae-identity-light',
        this.collapsedModifier,
        this.invert ? '_invert' : '',
      ];
    },
    chunkAddress() {
      if (this.address.length === 0) return [];
      const chunks = this.address.match(/.{1,7}/g);
      return [chunks.slice(0, 3), chunks.slice(3)];
    },
    collapsedModifier() {
      return this.collapsed ? '_collapsed' : '';
    },
  },
  filters: {
    shorten: value => value.substr(0, 8),
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/fallback/variables';

.ae-identity-light._invert {
  color: $white;
}

.flex-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chunk-row {
  font-family: 'Roboto Mono', monospace;
  font-size: 17px;
  font-weight: 500;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: 3.1px;
  font-stretch: normal;
  text-align: left;

  &:first-of-type {
    margin-top: 14px;
  }
}

.chunk {
  display: inline-block;
  width: calc(100% / 3);

  &:nth-child(2n) {
    text-align: center;
  }

  &:nth-child(3n) {
    text-align: right;
  }
}

.flex-row + .chunk-row {
  margin-top: 16px;
}

.identity-info._long {
  width: calc(100% - 65px);
  overflow: hidden;
}

.balances {
  width: auto;
  flex-grow: 1;
}

.balance {
  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
  font-stretch: normal;
  line-height: 12px;
  text-align: right;
  margin-top: 2px;

  &:first-of-type {
    margin-top: 0;
  }

  &.token {
    font-weight: bold;
  }
}

.currency-symbol {
  letter-spacing: 0.12em;
  padding-right: 3px;
}

.ae-identity-light .avatar {
  border-width: 1px;
  width: 23px;
  height: 23px;
}

.identity-name-position {
  margin-left: 10px;
  font-weight: 500;

  &._collapsed {
    margin-left: 9px;
    margin-right: 9px;
  }
}

.identity-name {
  margin: 0;
  font-size: 17px;

  &._collapsed {
    font-size: 12px;
    margin-top: -2px;
  }
}

.truncated-address {
  font-family: 'Roboto Mono', monospace;
  font-size: 11px;
  opacity: 0.67;
  display: block;
}

.identity-name + .truncated-address {
  margin-top: 1px;
}
</style>
