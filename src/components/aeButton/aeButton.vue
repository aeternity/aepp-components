<template>
  <component
    :is="to ? 'ae-link' : 'button'"
    class="ae-button"
    :class="cssClass"
    @click="$emit('click', $event)"
    :to="to"
  >
    <div class="inner">
      <!-- Button icon -->
      <slot name='icon' :class="['ae-button__icon', sizeModifier, hasLabelModifier]">
      </slot>
      <div v-if='hasLabel' :class="['label', sizeModifier, typeModifier]">
        <!-- Button content -->
        <slot></slot>
      </div>
    </div>
  </component>
</template>

<script src='./aeButton.js'/>
<style src='./aeButton.scss' lang='scss' />
