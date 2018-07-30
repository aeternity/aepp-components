<template>
    <div class="ae-view" :class="{ [face]: Boolean(face), visible }">
      <div class="ae-view-header">
        <slot name="header" />
      </div>
      <slot />
    </div>
</template>
<style src="./ae-view.scss" lang="scss" scoped />
<script src="./ae-view.js" />
