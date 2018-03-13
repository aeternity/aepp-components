<template>
  <component :is="to ? 'ae-link' : 'div'" class="ae-panel" :to="to">
    <div class="progressbar" :style="progressbarStyle(ratioTop)" />
    <div class="content">
      <header v-if="title || closeHandler">
        <h1>{{title}}</h1>
        <ae-button @click="closeHandler" plain size="small">
          <ae-icon slot='icon' name='close' />
        </ae-button>
      </header>
      <!-- This is the Body of the Panel -->
      <slot />
    </div>
    <div class="progressbar" :style="progressbarStyle(ratioBottom)" />
  </component>
</template>

<script src='./aePanel.js'/>
/* eslint no-unused-expressions: "off" */
<style src='./aePanel.scss' lang='scss'/>
