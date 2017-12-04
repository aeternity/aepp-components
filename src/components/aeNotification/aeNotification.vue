<template>
  <div class="ae-notification" :class='cssClass'>
    <content>
      <!-- Notification content -->
      <slot />
    </content>
    <!-- Notification button -->
    <slot name='button'>
      <ae-button :type='type' invert  @click="close" >
        <ae-icon slot='icon' :type='type' name='close'/>
      </ae-button>
    </slot>
  </div>
</template>

<script src='./aeNotification.js'/>
/* eslint no-unused-expressions: "off" */
<style scoped lang='scss' src='./aeNotification.scss'/>
