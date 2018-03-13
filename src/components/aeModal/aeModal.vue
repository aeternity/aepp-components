<template>
  <ae-overlay @click="close">
    <div class="ae-modal">
      <ae-header class="phone" :name="title">
        <ae-button slot="mobile-right" @click="close" plain size="small">
          <ae-icon slot='icon' name='close' />
        </ae-button>
      </ae-header>
      <main>
        <header class="desktop">
          <h1>{{title}}</h1>
          <ae-button @click="close" plain>
            <ae-icon slot='icon' name='close' />
          </ae-button>
        </header>
        <!-- Modal content -->
        <slot />
      </main>
    </div>
  </ae-overlay>
</template>

<script src='./aeModal.js'/>
/* eslint no-unused-expressions: "off" */
<style src='./aeModal.scss' lang='scss'/>
