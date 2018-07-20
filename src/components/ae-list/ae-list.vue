<template>
    <ul class="ae-list" :class="{ [packing]: Boolean(packing) }">
      <slot />
    </ul>
</template>
<style src="./ae-list.scss" lang="scss" scoped />
<script src="./ae-list.js" />
