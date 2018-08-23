<template>
  <ul class="ae-address" :style="{ gridGap: gap }">
    <template v-if="length === 'medium'">
      <li v-for="chunk in chunked.slice(0, 3)" :key="chunk">
        {{ chunk }}
      </li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li v-for="chunk in chunked.slice(15, 18)" :key="chunk">
        {{ chunk }}
      </li>
    </template>
    <template v-else-if="length === 'short'">
      <li v-for="chunk in chunked.slice(0, 1)" :key="chunk">
        {{ chunk }}
      </li>
      <li>...</li>
      <li v-for="chunk in chunked.slice(17, 18)" :key="chunk">
        {{ chunk }}
      </li>
    </template>
    <template v-else>
      <li v-for="chunk in chunked" :key="chunk">
        {{ chunk }}
      </li>
    </template>
  </ul>
</template>
<style src="./ae-address.scss" lang="scss" scoped />
<script src="./ae-address.js" />
