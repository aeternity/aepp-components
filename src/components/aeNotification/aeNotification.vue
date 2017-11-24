<template>
  <div class="ae-notification" :class='cssClass'>
    <content>
      <slot />
    </content>
    <slot name='button'>
      <ae-button @click="close" >
        <ae-icon slot='icon' name='close'/>
      </ae-button>
    </slot>
  </div>
</template>

<script src='./aeNotification.js'/>
/* eslint no-unused-expressions: "off" */
<style scoped lang='scss' src='./aeNotification.scss'/>
