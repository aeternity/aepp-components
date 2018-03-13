<template>
  <ae-overlay @click="close">
    <div class="ae-modal-light">
      <h1>{{title}}</h1>
      <main>
        <!-- Modal content -->
        <slot />
      </main>
      <div class="buttons">
        <slot name="buttons">
          <ae-button size="smaller" uppercase @click="close">close</ae-button>
        </slot>
      </div>
    </div>
  </ae-overlay>
</template>

<script src='./aeModalLight.js'/>
/* eslint no-unused-expressions: "off" */
<style src='./aeModalLight.scss' lang='scss'/>
