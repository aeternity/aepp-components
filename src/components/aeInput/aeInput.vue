<template>
  <div class="ae-input">
    <!-- The content of the left side -->
    <slot name="left" />
    <input
      :id="id"
      :placeholder="placeholder"
      :type="type"
      :step="type === 'number' && 'any'"
      :class="{ monospace }"
      @input="handleInput"
      :value="value"
    />
    <!-- The content of the right side -->
    <slot name="right" />
  </div>
</template>

<script src='./aeInput.js'/>
/* eslint no-unused-expressions: "off" */
<style src='./aeInput.scss' lang='scss'/>
