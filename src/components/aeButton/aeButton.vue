<template>
  <button class="ae-button" :class="cssClass">
    <div class="inner">
      <slot name='icon'>
      </slot>

      <div v-if='hasDefaultSlot' class="label">
        <slot>
        </slot>
      </div>
    </div>
  </button>
</template>

<script src='./aeButton.js'/>
// eslint-disable-next-line no-unused-expressions, semi
<style src='./aeButton.scss' lang='scss' />
