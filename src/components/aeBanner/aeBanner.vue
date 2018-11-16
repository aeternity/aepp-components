<template>
  <div class="ae-banner">
    <div>
      <main>
        <!-- @slot Content -->
        <slot />
      </main>
      <!-- @slot Content of right side -->
      <slot name="right" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'ae-banner',
};
</script>
<style lang="scss" scoped>
@import '../../styles/fallback/mixins';

.ae-banner {
  background: linear-gradient(to bottom, rgba($aubergine, 0.65), transparent);
  z-index: 1;
  padding: 10px 10px 25px 10px;

  > div {
    display: flex;
    align-items: center;
    min-height: 64px;
    box-sizing: border-box;
    max-width: $container-width;
    margin: 0 auto;
    border-radius: 10px;
    background: linear-gradient(to bottom, $white, #f1f4f7);
    box-shadow: 0 4px 8px 0 rgba($dark, 0.1);
    padding: 17px 22px;

    @include desktop {
      padding-left: 30px;
    }

    main {
      flex-grow: 1;
      font-weight: 500;
      line-height: 1.38;
      color: $aubergine;
    }
  }
}
</style>
