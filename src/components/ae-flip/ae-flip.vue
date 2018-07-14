<template>
  <div class="ae-flip-container">
    <div class="ae-flip-flipper">
      <div class="ae-flip-front" v-if="$slots.front">
        <!-- @slot Front split side of the container -->
        <slot name="front"/>
      </div>
      <div class="ae-flip-back" v-if="$slots.back">
        <!-- @slot Back split side of the container -->
        <slot name="back" />
      </div>
    </div>
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
  </div>
</template>
<style src="./ae-flip.scss" lang="scss" scoped />
<script src="./ae-flip.js" />
