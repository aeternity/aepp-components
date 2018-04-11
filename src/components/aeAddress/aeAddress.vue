<template>
  <div class="aeAddressWrapper">
    <ae-identity-avatar v-if='showAvatar'
    :address='address'
    class="avatar"
    />
    <div>
      <div :class="['name', textIndentModifier]" v-if='name'>
        {{displayName}}
        <ae-icon name='check'
            type='dramatic'
            v-if='verified'
            :class="['checkmark', textIndentModifier]"
            data-checkmark
        />
      </div>
      <div :class="['address', textIndentModifier]" v-if="size !== 'chunked'">{{displayAddress}}</div>
      <div v-if="size === 'chunked'" :class="['chunked-address', textIndentModifier]">
        <div v-for="chunk of displayAddress" class="chunk">
          {{chunk}}
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./aeAddress.js'/>
/* eslint no-unused-expressions: "off" */
<style scoped src='./aeAddress.scss' lang="scss"/>
