<template>
  <ul
    ref="address"
    class="ae-address"
    :class="[ length ]"
    :style="{ gridGap: gap }"
    v-copy-to-clipboard="value"
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
     * valid properties: `medium, short`
     */
    length: String,

    /**
     * Set the grid gab between elements, either px's or rem's
     */
    gap: String,
  },
  computed: {
    /**
     * This will chunk the address
     * into values of 3 and return an array
     * @return {String[]}
     */
    chunked() {
      return this.value.match(/.{1,3}/g);
    },
  },
};
</script>
<style lang="scss" scoped>
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
  }

  &.v-copied-to-clipboard {
    opacity: 0.4;
  }

  &.v-copied-to-clipboard:before {
    @extend %face-mono-base;

    content: 'address copied';
    display: flex;
    justify-content: center;
    align-items: center;
    color: $color-black;
    font-weight: bold;
    font-size: 1.25rem;
    background: rgba($color-neutral-positive-1, 0.25);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
}
</style>
