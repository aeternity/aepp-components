<template>
  <ae-link :to="to" :class="{ 'ae-filter-item': true, active }">
    <!-- Filter item content -->
    <slot />
  </ae-link>
</template>

<script>
  import AeLink from '../aeLink/aeLink.vue'

  export default {
    name: 'ae-filter-item',
    components: { AeLink },
    props: {
      /**
       * Path, that will be passed to ae-link
       */
      to: { type: [String, Object], required: false },
      /**
       * Mark the filter item as active
       */
      active: { type: Boolean, required: false }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ae-filter-item {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    padding: 0 20px;
    margin: 0 5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.11);
    text-decoration: none;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    background-color: #f1f1f1; // can't fetch color from zeplin
    color: $grey;
    text-transform: uppercase;

    &.active, &:hover {
      background-color: $aubergine;
      color: $white;
    }
  }
</style>
