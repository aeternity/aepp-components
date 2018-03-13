<template>
  <ae-link :to="to" :class="{ 'ae-filter-item': true, active }">
    <!-- Filter item content -->
    <slot />
  </ae-link>
</template>

<script src='./aeFilterItem.js'/>
/* eslint no-unused-expressions: "off" */
<style src='./aeFilterItem.scss' lang='scss'/>
