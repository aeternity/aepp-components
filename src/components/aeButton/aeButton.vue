<template>
  <component
    :is="to ? 'ae-link' : 'button'"
    class="ae-button"
    :class="cssClass"
    @click="$emit('click', $event)"
    :to="to"
  >
    <div class="inner">
      <!-- @slot Button icon -->
      <slot name='icon' :class="['ae-button__icon', sizeModifier, hasLabelModifier]" />
      <div v-if='hasLabel' :class="['label', sizeModifier, typeModifier]">
        <!-- @slot Button content -->
        <slot />
      </div>
    </div>
  </component>
</template>

<script src='./aeButton.js'/>
<style src='./aeButton.scss' lang='scss' />
