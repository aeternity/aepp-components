<template>
    <ul class="ae-list" :class="{ [face]: Boolean(face) }">
      <slot />
    </ul>
</template>
<style src="./ae-list.scss" lang="scss" scoped />
<script src="./ae-list.js" />
