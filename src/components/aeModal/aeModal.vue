<template>
  <ae-overlay @click="close">
    <div class="ae-modal">
      <div class="close-btn" v-if="closeable" @click="close">
        <ae-icon slot='icon' name='close' />
      </div>
      <h1 v-if="title">{{title}}</h1>
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
     * Modal can be closed 
     */
    closeable: {
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
      if (this.closeable) return this.$emit('close')
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
    background: linear-gradient(to bottom, white, #f1f4f7);
    width:100%;
    max-width:$screen-phone;
    max-height:calc(100vh - 20px);
    overflow-y:scroll;
    margin:0 auto;
    padding:30px 20px;
    border-radius: 10px;
    text-align: center;

    h1 {
      font-size: 24px;
      font-weight: bolder;
      line-height: 1.17;
      margin:0 0 7px;
    }

    section{
      line-height: 1.44;
      font-size:16px;
    }
  }

  .close-btn{
    position: absolute;
    top:0; right:0;
    padding: 10px;
    cursor: pointer;
  }
</style>
