<template>
  <div class="ae-banner">
    <div class="inner">
      <slot />
      <slot name="right">
        <div class="right">
          <ae-button
            uppercase
            size="smaller"
            type="exciting"
            @click="hideBanner"
          >
            Cancel
          </ae-button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script src='./aeBanner.js' />
/* eslint no-unused-expressions: "off" */
<style src='./aeBanner.scss' lang='scss' />
