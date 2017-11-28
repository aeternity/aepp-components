<template>
  <ae-overlay @click="close">
    <div class="ae-modal">
      <ae-header class="phone" :name="title">
        <ae-button slot="mobile-right" @click="close">
          <ae-icon slot='icon' name='close' />
        </ae-button>
      </ae-header>
      <main>
        <header class="desktop">
          <h1>{{title}}</h1>
          <ae-button @click="close">
            <ae-icon slot='icon' name='close' />
          </ae-button>
        </header>
        <!-- Modal content -->
        <slot />
      </main>
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
    title: String
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
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ae-overlay {
    .ae-modal {
      background: linear-gradient(to bottom, white, #f1f4f7);
    }

    @media (min-width: $screen-phone) {
      display: flex;
      padding: 10px;
      box-sizing: border-box;

      .ae-modal {
        margin: auto;
        min-width: $screen-phone;
        border-radius: 10px;
      }

      .phone {
        display: none;
      }

      main {
        header {
          position: relative;

          h1 {
            font-size: 28px;
            line-height: 50px;
            font-weight: 500;
            margin: 0;
          }

          .ae-button {
            position: absolute;
            top: 0;
            right: 0;
          }
        }

        padding: 30px;
      }
    }

    @media (max-width: $screen-phone) {
      .ae-modal {
        min-height: 100%;
      }

      .desktop {
        display: none;
      }

      main {
        padding: 0 20px 20px 20px;
      }
    }
  }
</style>
