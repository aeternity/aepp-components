<template>
    <div class="pink ae-button" @click="$emit('click', $event)">
      <slot>
      </slot>
    </div>
</template>

<script src='./aeButton.js'/>
<style scoped src='./aeButton.css'/>
