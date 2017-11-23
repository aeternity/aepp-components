<template>
  <div :class='cssClass'>
    <ae-identity-avatar v-if='showAvatar' :address='address' />
    <span class='address'>{{displayAddress}}</span>
  </div>
</template>
<script src='./aeAddress.js'/>
/* eslint no-unused-expressions: "off" */
<style src='./aeAddress.scss'/>
