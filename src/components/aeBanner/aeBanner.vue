<template>
  <div class="ae-banner">
    <div>
      <main>
        <!-- Content -->
        <slot />
      </main>
      <!-- Content of right side -->
      <slot name="right" />
    </div>
  </div>
</template>

<script src="./aeBanner.js" />
/* eslint no-unused-expressions: "off" */
<style scoped lang="scss" src="./aeBanner.scss" />
