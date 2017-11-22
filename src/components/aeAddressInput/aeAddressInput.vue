<template>
  <div>
    <label>
      Address
      <span class="help" :class="{ danger: !addressValid }">
        <span v-if='addressValid'>
          Valid |
          <a v-if='externalLink' :href='externalLink' target='_blank'>
            Show Info
          </a>
        </span>
        <span v-else='addressValid'>
          Invalid
        </span>
      </span>
    </label>
    <input
      :class="{ danger: !addressValid }"
      v-model='address'
      type="text"
      pattern="/^0x[0-9a-fA-F]{40}$/i"
      placeholder="recipient ethereum address"
      maxlength=42
    />
    <!--<text-muted :style="{ visibility: message.length <= 300 ? 'visible' : 'hidden' }" small>-->
    <!--Characters left: {{300 - message.length}}-->
    <!--</text-muted>-->
  </div>
</template>
<script src='./aeAddressInput.js'/>
<style src='./aeAddressInput.scss'/>
