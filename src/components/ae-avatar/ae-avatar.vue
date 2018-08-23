<template>
  <div class="ae-avatar" :class="{ [size]: Boolean(size) }">
    <canvas ref="blockies" />
  </div>
</template>
<style src="./ae-avatar.scss" lang="scss" scoped />
<script src="./ae-avatar.js" />
