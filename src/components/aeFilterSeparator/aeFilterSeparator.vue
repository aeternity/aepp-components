<template>
  <span class="ae-filter-separator" />
</template>
<script>
import deprecated from '../../tools/logs/deprecated';

export default {
  name: 'ae-filter-separator',
  mixins: [deprecated],
};
</script>
<style lang="scss" scoped>
.ae-filter-separator {
  display: inline-block;
  width: 1px;
  height: 30px;
  margin: 0 15px;
  background-color: #d8d8d8;
  vertical-align: bottom;
}
</style>
