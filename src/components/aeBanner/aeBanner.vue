<template>
  <div class="ae-banner">
    <div class="inner">
      <slot />
      <div class="right">
        <slot name="right"  class="right" />
      </div>
    </div>
  </div>
</template>

<script src='./aeBanner.js' />
/* eslint no-unused-expressions: "off" */
<style src='./aeBanner.scss' lang='scss' />
