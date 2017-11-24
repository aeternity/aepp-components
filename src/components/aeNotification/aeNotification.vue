<template>
  <div class="ae-notification" :class='cssClass'>
    <content>
      <slot />
    </content>
    <slot name='button'>
      <ae-close-button @click="close" />
    </slot>
  </div>
</template>

<script src='./aeNotification.js'/>
<style scoped lang='scss' src='./aeNotification.scss'/>
