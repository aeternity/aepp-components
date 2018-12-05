<template>
  <span class="ae-badge">
    <!-- @slot Badge content -->
    <slot />
  </span>
</template>
<script>
import deprecated from '../../tools/logs/deprecated';

export default {
  name: 'ae-badge',
  mixins: [deprecated],
};
</script>
<style lang="scss" scoped>
@import '../../styles/fallback/variables';

.ae-badge {
  display: inline-block;
  min-width: 60px;
  height: 22px;
  line-height: 22px;
  border-radius: 5px;
  background-color: $aubergine;
  color: $white;
  text-align: center;
  font-size: 9px;
  text-transform: uppercase;
  font-weight: 500;
  vertical-align: bottom;
}
</style>
