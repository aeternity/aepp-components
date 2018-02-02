<template>
  <div class="ae-banner">
    <div class="inner">
      <slot />
      <slot name="right">
        <ae-button
          uppercase
          size="smaller"
          type="exciting"
          @click="hideBanner"
          class="right"
          >
          Cancel
        </ae-button>
      </slot>
    </div>
  </div>
</template>

<script src='./aeBanner.js' />
/* eslint no-unused-expressions: "off" */
<style src='./aeBanner.scss' lang='scss' />
