<template>
  <i class="ae-icon"
     :class="{ [`ae-icon-${name}`]: Boolean(name), [fill]: Boolean(fill), [face]: Boolean(face)  }"
     :style="{ fontSize: size }" />
</template>
<style src="./ae-icon.scss" lang="scss" scoped />
<script src="./ae-icon.js" />
