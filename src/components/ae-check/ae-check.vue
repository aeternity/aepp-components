<template>
  <label :for="id" class="ae-check" :class="{ [face]: Boolean(face), [fill]: Boolean(fill) }">
    <input :id="id" :type="type" :name="name" :value="value">
    <span>
      <slot />
    </span>
  </label>
</template>
<style src="./ae-check.scss" lang="scss" scoped />
<script src="./ae-check.js" />
