<template>
  <div v-if="show" class="ae-banner">
    <div class="inner">
      <slot />
      <div v-if='hasRightItem' class="right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script src='./aeBanner.js' />
<style src='./aeBanner.scss' lang='scss' />
