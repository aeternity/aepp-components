<template>
  <ae-overlay @click="close">
    <div class="ae-modal">
      <ae-header class="phone" :name="title">
        <ae-close-button slot="mobile-right" icon @click="close" />
      </ae-header>
      <main>
        <header class="desktop">
          <h1>{{title}}</h1>
          <ae-close-button @click="close" />
        </header>
        <slot />
      </main>
    </div>
  </ae-overlay>
</template>

<script>
  import AeOverlay from '../aeOverlay/aeOverlay.vue';
  import AeHeader from '../aeHeader/aeHeader.vue';
  import AeCloseButton from '../aeCloseButton/aeCloseButton.vue';

  export default {
    props: {
      title: String,
    },
    components: { AeOverlay, AeHeader, AeCloseButton },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
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

          .ae-close-button {
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
