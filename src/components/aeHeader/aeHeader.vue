<template>
  <div class="ae-header">
    <header class="desktop">
      <ae-link class="title" to="/">
        <img :src="require('../../assets/logo-small.png')" alt="Go to main page" />
        {{name}}
      </ae-link>
      <div>
        <!-- The content of the right side on desktop -->
        <slot />
      </div>
    </header>
    <header class="phone">
      <div>
        <!-- The content of the left side on mobile -->
        <slot name="mobile-left" />
      </div>
      <div class="title-wrapper">
        <ae-link class="title" to="/">
          {{name}}
        </ae-link>
      </div>
      <div>
        <!-- The content of the right side on mobile -->
        <slot name="mobile-right" />
      </div>
    </header>
  </div>
</template>

<script src='./aeHeader.js'/>
/* eslint no-unused-expressions: "off" */
<style src='./aeHeader.scss' lang='scss'/>
