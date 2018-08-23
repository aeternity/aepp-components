<template>
  <label :for="id" class="ae-check" :class="{ [fill]: Boolean(fill), [align]: Boolean(align), extend }">
    <input :id="id" :type="type" :name="name" :value="value" :disabled="disabled">
    <span class="ae-check-button">
      <slot />
    </span>
    <slot class="ae-check-content" name="content"/>
  </label>
</template>
<style src="./ae-check.scss" lang="scss" scoped />
<script src="./ae-check.js" />
