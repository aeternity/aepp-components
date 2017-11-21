<template>
  <div :class='cssClass'>
    <ae-identity-avatar v-if='showAvatar' :address='address' />
    <span class='address'>{{displayAddress}}</span>
  </div>
</template>
<script src='./aeAddress.js'/>
<style src='./aeAddress.scss'/>
