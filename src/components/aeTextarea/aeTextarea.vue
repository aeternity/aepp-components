<template>
  <textarea
    class="ae-textarea"
    :class="{ monospace }"
    @input="handleInput"
    @copy="handleCopy"
  >{{value}}</textarea>
</template>

<script src='./aeTextarea.js'/>
/* eslint no-unused-expressions: "off" */
<style src='./aeTextarea.scss' lang='scss'/>
