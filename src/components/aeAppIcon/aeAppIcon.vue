<template>
  <div class="ae-app-icon app-icon" @click="forwardEvent">
    <div
      :style="cssStyle"
      class="icon-image"
      ref="iconImage"
      @click="forwardEvent"
    >
    </div>
  </div>
</template>
<script src='./aeAppIcon.js'>
  export {default} from './aeAppIcon'
</script>
/* eslint no-unused-expressions: "off" */
<style src='./aeAppIcon.css'/>
