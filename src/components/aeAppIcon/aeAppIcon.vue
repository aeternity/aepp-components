<template>
  <div
    class="ae-app-icon app-icon"
    :class="{ 'full-size': fullSize }"
    @click="forwardEvent"
  >
    <div
      :style="cssStyle"
      class="icon-image"
    />
  </div>
</template>
<script src='./aeAppIcon.js'/>
<style src='./aeAppIcon.css'/>
