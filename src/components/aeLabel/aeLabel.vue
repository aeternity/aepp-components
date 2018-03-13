<template>
  <label class="ae-label">
    <div class="content">
      <!-- Label content -->
      <slot />
    </div>
    <div :class="['help', typeModifier]">
      {{helpText}}
    </div>
  </label>
</template>

<script src='./aeLabel.js'/>
/* eslint no-unused-expressions: "off" */
<style src='./aeLabel.scss' lang='scss'/>
