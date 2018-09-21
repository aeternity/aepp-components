<template>
  <div class="ae-switch">
    <template v-for='c in choices'>
      <input v-model='selected' :value='c.value' type="radio" :name="name" :id="c.value"
             :key="c.value" />
      <label :for='c.value' :key="`${c.value}-label`">{{c.label}}</label>
    </template>
  </div>
</template>

<script src="./aeSwitch.js"/>
<style src="./aeSwitch.scss" scoped lang="scss" />
