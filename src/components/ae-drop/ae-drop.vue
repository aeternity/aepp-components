<template>
    <div class="ae-drop" :class="{ active }" v-clickaway="deactivate">
      <v-touch @tap="activate">
        <button type="button" class="ae-drop-button">
          <slot name="button" />
        </button>
      </v-touch>
      <ul class="ae-drop-menu" :class="{ [direction]: Boolean(direction) }">
        <slot />
      </ul>
    </div>
</template>
<style src="./ae-drop.scss" lang="scss" scoped />
<script src="./ae-drop.js"/>
