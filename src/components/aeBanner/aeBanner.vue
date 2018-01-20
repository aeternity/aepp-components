<template>
  <div class="ae-banner" v-if='visible'>
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
