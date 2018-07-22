<template>
  <div class="ae-avatar" :class="{ [size]: Boolean(size) }">
    <img :src="blockieDataURL" :alt="address">
  </div>
</template>
<style src="./ae-avatar.scss" lang="scss" scoped />
<script src="./ae-avatar.js" />
