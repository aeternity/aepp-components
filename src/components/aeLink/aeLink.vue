<template>
  <router-link class="ae-link" v-if="useRouterLink" :to="to"><slot /></router-link>
  <a class="ae-link" v-else :href="to" :target="isLinkOnSameHost ? '_self' : '_blank'"><slot /></a>
</template>

<script src='./aeLink.js'/>
