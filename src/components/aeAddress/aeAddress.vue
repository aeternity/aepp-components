<template>
  <div class="ae-address">
    <ae-avatar
      v-if='showAvatar'
      :address='address'
      class="avatar"
    />
    <div>
      <div :class="['name', textIndentModifier]" v-if='name'>
        {{displayName}}
        <ae-icon
          name='check'
          type='dramatic'
          v-if='verified'
          :class="['checkmark', textIndentModifier]"
        />
      </div>
      <div
        :class="['address', textIndentModifier]"
        v-if="size !== 'chunked'"
      >
        {{displayAddress}}
      </div>
      <div
        v-if="size === 'chunked'"
        :class="['chunked-address', textIndentModifier, chunkModifier]"
        v-remove-spaces-on-copy
      >
        <div v-for="(chunk, idx) of displayAddress" :key="idx" class="chunk">
          {{chunk}}
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./aeAddress.js'/>
<style scoped src='./aeAddress.scss' lang="scss"/>
