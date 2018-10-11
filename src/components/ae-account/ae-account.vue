<template>
  <ae-card class="ae-account" :fill="fill">
    <header>
      <ae-identicon :address="address" />
      <ae-input-plain
        value="Main Account"
        placeholder="Account name"
        fill="white"
      />
      <!-- @slot something displayed on the right top corner -->
      <slot name="icon" />
    </header>

    <main>
      <div class="security-status">{{ securityStatus }}</div>
      <ae-address :value="address" length="medium" gap="0" />
    </main>

    <template slot="toolbar">
      <span class="balance-title">Balance</span>
      <span class="balance-value">{{ balance }}</span>
    </template>
  </ae-card>
</template>

<script>
import AeAddress from '../ae-address/ae-address.vue';
import AeIdenticon from '../ae-identicon/ae-identicon.vue';
import AeCard from '../ae-card/ae-card.vue';
import AeInputPlain from '../ae-input-plain/ae-input-plain.vue';

export default {
  name: 'ae-account',
  components: {
    AeAddress,
    AeIdenticon,
    AeCard,
    AeInputPlain,
  },
  props: {
    address: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
    securityStatus: {
      type: String,
      default: 'normal\nsecured',
    },
    fill: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/placeholders/typography';
@import '../../styles/variables/colors';
@import '../../styles/globals/functions';

.ae-account.ae-card {
  header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: rem(12px) rem(16px) 0 rem(12px);
    margin-bottom: rem(12px);

    :last-child {
      margin-left: auto;
    }

    .ae-avatar {
      margin-right: rem(8px);
    }
  }

  main {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: rem(16px) rem(8px) rem(8px) rem(16px);

    .security-status {
      @extend %face-uppercase-xs;
      white-space: pre-line;
      margin-bottom: 0.25rem;
      font-weight: bold;
    }

    .ae-address {
      margin-left: auto;
      width: rem(150px);
    }
  }

  .balance-title, .balance-value {
    text-transform: none;
  }

  .balance-title {
    @extend %face-sans-xs;
  }

  .balance-value {
    @extend %face-mono-base;
    font-weight: normal;

    &:after {
      @extend %face-mono-xs;
      margin-left: 5px;
      content: 'AE';
    }
  }
}
</style>
