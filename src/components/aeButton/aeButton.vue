<template>
  <button class="ae-button" :class="cssClass" @click="$emit('click')">
    <div class="inner">
      <slot name='icon' :class="['ae-button__icon', sizeModifier, hasLabelModifier]">
      </slot>

      <div v-if='hasLabel' :class="['label', sizeModifier, typeModifier]">
        <slot></slot>
      </div>
    </div>
  </button>
</template>

<script src='./aeButton.js'/>
// eslint-disable-next-line no-unused-expressions, semi
<style src='./aeButton.scss' lang='scss' />
