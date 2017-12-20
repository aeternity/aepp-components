<template>
  <ae-overlay @click="close" :class="{'ae-overlay--fullscreen-modal': fullscreen}">
    <div class="ae-modal">
      <header>
        <div class="close-btn" v-if="showCloseButton" @click="close">
          <ae-icon slot='icon' name='close' />
        </div>
        <h1 v-if="title">{{title}}</h1>
      </header>
      <section>
        <!-- Modal content -->
        <slot />
      </section>
    </div>
  </ae-overlay>
</template>

<script>
import AeOverlay from '../aeOverlay/aeOverlay.vue'
import AeHeader from '../aeHeader/aeHeader.vue'
import AeButton from '../aeButton/aeButton.vue'
import AeIcon from '../aeIcon/aeIcon.vue'

export default {
  name: 'ae-modal',
  props: {
    /**
     * Modal title
     */
    title: String,
    /**
     * Modal has close button
     */
    showCloseButton: {
      type: Boolean,
      default: true
    },
    /**
     * Modal is fullscreen on mobile
     */
    fullscreen: {
      type: Boolean,
      default: true
    }
  },
  components: {
    AeOverlay,
    AeHeader,
    AeButton,
    AeIcon
  },
  methods: {
    close () {
      /**
       * Close event
       *
       * @event close
       * @type {undefined}
       */
      return this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ae-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
  }     

  .ae-modal {
    position: relative;
    margin:auto; // important rule, allows flex-center without overflow
    background: linear-gradient(to bottom, white, #f1f4f7);
    width:100%;
    max-width:$screen-phone;
    padding:30px 20px;
    box-sizing: border-box;
    border-radius: 10px;
    text-align: center;

    header{
      margin:0 0 7px;
    }

    h1 {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.17;
    }

    section{
      line-height: 1.44;
      font-size:16px;
    }
  }

  .close-btn{
    position: absolute;
    top:31px; right:23px;
    cursor: pointer;
    .ae-icon{
      display: block;
    }
  }
  
  // full screen mode on mobile
  @media (max-width:$screen-phone){
    .ae-overlay.ae-overlay--fullscreen-modal{
      padding:0;
      display: block;

      .ae-modal{
        border-radius:0;
        min-height:100vh;
        padding:41px 20px 20px;

        > header{
          position: relative;
        }
        .close-btn{
          top:1px;
          right:3px;
        }
      }
    }
  }
</style>
