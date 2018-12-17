<template>
  <ae-identity-background
    :type="backgroundType"
    class="ae-identity"
    @click="forwardEvent"
  >
    <ae-identity-light
      :name="name"
      :address="address"
      :balance="balance"
      :collapsed="collapsed"
      invert
    />
    <div class="footer" v-if="$slots.default">
      <slot />
    </div>
  </ae-identity-background>
</template>
<script>
import aeIdentityLight from '../aeIdentityLight/aeIdentityLight.vue';
import aeIdentityBackground from '../aeIdentityBackground/aeIdentityBackground.vue';
import helperMixin from '../../core/mixins/helper';

/**
 * Displays an Identity with an avatar blockie, the address and an amount of ether
 */
export default {
  name: 'ae-identity',
  components: { aeIdentityLight, aeIdentityBackground },
  props: {
    /**
     * An identity name
     */
    name: {
      type: String,
      required: false,
    },
    /**
     * An identity address
     */
    address: {
      type: String,
      required: false,
    },
    /**
     * An identity balance in AE
     */
    balance: {
      type: Number,
      required: false,
    },
    /**
     * Is this an identity activated/selected (magenta) or not (purple)?
     */
    active: {
      type: Boolean,
      default: false,
    },
    /**
     * Is this the full size identity card or the collapsed one
     * for displaying at the bottom of the screen?
     */
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [
    helperMixin,
  ],
  computed: {
    backgroundType() {
      return this.active ? 'dramatic' : 'exciting';
    },
  },
};
</script>
<style lang="scss" scoped>
.ae-identity {
  flex-direction: column;
}

.footer {
  margin-top: 18px;
}
</style>
