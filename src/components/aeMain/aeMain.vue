<template>
  <div class="ae-main">
    <slot />
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');

  :root {
    --silver: #dcdcdc;
    --smoke: #f5f5f5;
    --dark: #3c3c3c;
    --anthracite: #1e1e1e;
    --white: #ffffff;
    --apricot: #ff96a0;
    --grey: #989898;
    --aubergine: #320a3c;
    --black: #000000;
    --maegenta: #f03c6e;
    --plum: #c69cd0;
  }
</style>

<style lang="scss">
  @import "~normalize.css";
  @import "../variables";

  html {
    height: 100%;
  }
  body {
    min-height: 100%;
    height: 1px;
  }
  body, button, input, textarea {
    font-family: 'Roboto', sans-serif;
    color: $anthracite;
  }

  * {
    outline: none;
  }

  button {
    cursor: pointer;
  }

  input, input[type=text] {
    appearance: none;
  }

  textarea {
    resize: vertical;
  }
</style>

<style lang="scss" scoped>
  .ae-main {
    background: fixed linear-gradient(to bottom, white, #f1f4f7);
    min-height: 100%;
    overflow: hidden;
  }
</style>
