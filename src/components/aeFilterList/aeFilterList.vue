<template>
  <nav class="ae-filter-list">
    <!-- @slot Filter list content -->
    <slot />
  </nav>
</template>
<script>
import deprecated from '../../tools/logs/deprecated';

export default {
  name: 'ae-filter-list',
  mixins: [deprecated],
};
</script>
<style lang="scss" scoped>
@import '../../styles/fallback/mixins';

.ae-filter-list {
  margin: 30px 0;
  padding: 0 5px;
  text-align: center;
  white-space: nowrap;
  overflow-x: auto;
  @include phone {
    margin: 20px 0;
  }
}

::-webkit-scrollbar {
  width: 0;
}
</style>
