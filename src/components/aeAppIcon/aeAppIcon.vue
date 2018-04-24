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
<script src='./aeAppIcon.js'/>
<style src='./aeAppIcon.css'/>
