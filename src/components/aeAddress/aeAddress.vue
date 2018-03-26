<template>
  <div :class='cssClass'>
    <ae-identity-avatar v-if='showAvatar' 
    :address='address' 
    :name='name'
    />
    <div>
      <span class='name'>{{displayName}}</span>
      <span class='address' v-if="size !== 'full'">{{displayAddress}}</span>
      <div v-if="size === 'full'" class="chunked-address">
          <div v-for="chunk of displayAddress" class="chunk">
              {{chunk}}
          </div>
      </div>
    </div>  
  </div>
</template>
<script src='./aeAddress.js'/>
/* eslint no-unused-expressions: "off" */
<style scoped="scoped" src='./aeAddress.scss'/>
