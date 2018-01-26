<template>
  <div :class="{ 'identity-wrap' : true}">
		<div @click="$emit('click', $event)" :class="classObject">
      <div class="flex-row">
        <ae-identity-avatar :address='identity ? identity.address : ""'/>
        <span class="identity-info _short" v-if="collapsed">{{shortAddress}}</span>

        <div>
          <div v-if='tokenAmount' :class="{balance: true}">
            <span class="amount">{{tokenAmount}}</span>
            <span class="currency-symbol">AE</span>
          </div>
          <div :class="{balance: true}">
            <span class="amount">{{amount}}</span>
            <span class="currency-symbol">ETH</span>
          </div>
        </div>
      </div>
      <div v-if="!collapsed" class="chunked-address">
        <!-- <div class="identity-info _long">{{address}}</div> -->
        <div v-for="chunk in chunkAddress" class="chunk">
          {{chunk}}
        </div>
      </div>
      <div class="footer" v-if="showButtons">
        <ae-divider type="boring"/>
				<div class="buttons">
          <ae-button type="boring" size="small" @click="editIdentityCardAddress" uppercase>Edit</ae-button>
          <ae-button type="boring" size="small" @click="copyIdentityCardAddress" uppercase>Copy</ae-button>
          <ae-button type="dramatic" size="small" @click="toggleActiveIdentityCard" uppercase :inactive="active">
            <span v-if="active">Active</span>
            <span v-else>Activate</span>
          </ae-button>
        </div>
			</div>
		</div>
	</div>
</template>

<script src='./aeIdentity.js'/>
// eslint-disable-next-line no-unused-expressions, semi
<style scoped src='./aeIdentity.scss' lang='scss'/>
