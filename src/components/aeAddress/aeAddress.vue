<template>
  <div :class='cssClass' class="aeAddressWrapper">
    <ae-identity-avatar v-if='showAvatar' 
    :address='address' 
    :name='name'
    class="avatar"
    />
    <div>
      <div class='name'>
        {{displayName}}
        <ae-icon name='check'
            type='dramatic'
            v-if='verified' />
      </div>
      <div class='address' v-if="size !== 'full'">{{displayAddress}}</div>
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
