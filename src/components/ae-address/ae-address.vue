<template>
  <ul class="ae-address" :style="{ gridGap: gap }" v-remove-spaces-on-copy>
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
      <li v-for="chunk in chunked.slice(0, 1)" :key="chunk">
        {{ chunk }}
      </li>
      <li>...</li>
      <li v-for="chunk in chunked.slice(17, 18)" :key="chunk">
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
import removeSpacesOnCopy from '../../directives/removeSpacesOnCopy';

export default {
  name: 'ae-address',
  directives: { removeSpacesOnCopy },
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
  @import '../../styles/globals';

  .ae-address {
    @extend %face-mono-base;

    display: grid;
    align-items: center;
    justify-items: center;
    grid-gap: rem(4px);
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    font-weight: 500;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;

    > li {
      list-style: none;
    }
  }
</style>
