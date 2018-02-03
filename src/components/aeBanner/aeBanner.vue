<template>
  <div class="ae-banner" :class='cssClass'>
    <content>
      <!-- Banner content -->
      <slot />
    </content>
    <!-- Banner button -->
    <slot name='button'>
      <ae-button :type='type' invert  @click="close" >
        <ae-icon slot='icon' :type='type' name='close'/>
      </ae-button>
    </slot>
  </div>
</template>

<script src='./aeBanner.js'/>
/* eslint no-unused-expressions: "off" */
<style scoped lang='scss' src='./aeBanner.scss'/>
