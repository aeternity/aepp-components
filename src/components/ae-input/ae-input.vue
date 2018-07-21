<template>
  <div class="ae-input-container" :class="{ focus, error }">
    <div class="ae-input-box">
      <!-- @slot used for defining header section of input -->
      <div class="ae-input-header" v-if="label">
        <label :for="id" class="ae-input-label">
          {{ label }}
        </label>
        <slot name="header" />
      </div>
      <!-- Input tag -->
      <input :id="id"
             :type="type"
             :placeholder="placeholder"
             class="ae-input"
             :class="{ aemount }"
             @focus="focus = true"
             @blur="focus = false"
             @keyup.enter="propagate"
             @input="propagate" />
    </div>
    <!-- @slot footer slot, used for adding elements below the input -->
    <slot name="footer" />
  </div>
</template>
<style src="./ae-input.scss" lang="scss" scoped />
<script src="./ae-input.js" />
