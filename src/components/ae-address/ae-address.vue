<template>
  <ul
    ref="address"
    class="ae-address"
    :class="[ length ]"
    :style="{ gridGap: gap }"
    :title="value"
    v-copy-to-clipboard="copyToClipboard"
    v-remove-spaces-on-copy
  >
    <template v-if="length === 'medium'">
      <li v-for="chunk in chunked.slice(0, 3)" :key="chunk">
        {{ chunk }}
      </li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li v-for="chunk in chunked.slice(15, 18)" :key="chunk">
        {{ chunk }}
      </li>
    </template>
    <template v-else-if="length === 'short'">
      <li v-for="chunk in chunked.slice(0, 2)" :key="chunk">
        {{ chunk }}
      </li>
      <li>...</li>
      <li v-for="chunk in chunked.slice(16, 18)" :key="chunk">
        {{ chunk }}
      </li>
    </template>
    <template v-else-if="length === 'flat'">
      <li>
        {{ chunked.join('') }}
      </li>
    </template>
    <template v-else>
      <li v-for="chunk in chunked" :key="chunk">
        {{ chunk }}
      </li>
    </template>
  </ul>
</template>
<script>
import copyToClipboard from '../../directives/copyToClipboard';
import removeSpacesOnCopy from '../../directives/removeSpacesOnCopy';

/**
 * This component renders the aeternity address in
 * a styled format to be easily accessible, it also
 * provides click-to-copy functionality.
 */
export default {
  name: 'ae-address',
  directives: { copyToClipboard, removeSpacesOnCopy },
  props: {
    /**
     * ae address value to be displayed
     */
    value: {
      type: String,
      required: true,
    },

    /**
     * Set the length of the address
     * `medium, short, flat`
     */
    length: String,

    /**
     * Set the grid gap between elements,
     * accepts any valid css value, ex: `10px, 1rem, 50%, 10px 10px`
     */
    gap: String,

    /**
     * When set to `true` enables copy to clipboard
     * when the user clicks/taps the address
     */
    enableCopyToClipboard: Boolean,
  },
  computed: {
    /**
     * Computed method to detect whether,
     * the copyToClipboard should be enabled or not
     * @return {String|Boolean}
     */
    copyToClipboard() {
      return this.enableCopyToClipboard ? this.value : false;
    },

    /**
     * This will chunk the address into values of 3 and return an array
     * @return {String[]}
     */
    chunked() {
      return this.value.match(/^\w{2}_|.{2}(?=.{47,48}$)|.{2,3}/g);
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/variables/colors';
@import '../../styles/placeholders/typography';

.ae-address {
  @extend %face-mono-base;

  position: relative;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 0.25rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  font-weight: 500;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;

  > li {
    list-style: none;
  }

  &.short {
    grid-template-columns: repeat(5, 1fr);

    &.v-copied-to-clipboard:before {
      font-size: 0.875rem;
    }
  }

  &.flat {
    grid-template-columns: 1fr;

    > li {
      word-break: break-all;
    }
  }

  &.v-copied-to-clipboard:before {
    @extend %face-mono-base;

    content: 'address copied';
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: $color-neutral-negative-3;
    background: rgba($color-neutral-positive-1, 0.9);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
}
</style>
