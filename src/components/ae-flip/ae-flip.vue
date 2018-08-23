<template>
  <v-touch class="ae-flip-touch-container" @swipeleft="left" @swiperight="right">
    <div class="ae-flip-container" :class="{ [direction]: Boolean(direction) }">
      <div class="ae-flip-flipper">
        <div class="ae-flip-front" v-if="$slots.front">
          <!-- @slot Front side of the container -->
          <slot name="front"/>
        </div>
        <div class="ae-flip-back" v-if="$slots.back">
          <!-- @slot Back side of the container -->
          <slot name="back" />
        </div>
      </div>
      <ul class="ae-flip-bar">
        <li @click="rotation = 0" :class="{ active: rotation === 0 }" />
        <li @click="rotation = 180" :class="{ active: rotation === 180 }" />
      </ul>
    </div>
  </v-touch>
</template>
<style src="./ae-flip.scss" lang="scss" scoped />
<script src="./ae-flip.js" />
