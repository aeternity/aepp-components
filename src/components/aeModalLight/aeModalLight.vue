<template>
  <ae-overlay @click="close">
    <div class="ae-modal-light">
      <h1>{{title}}</h1>
      <main>
        <!-- @slot Modal content -->
        <slot />
      </main>
      <div class="buttons">
        <slot name="buttons">
          <ae-button size="small" plain uppercase @click="close">close</ae-button>
        </slot>
      </div>
    </div>
  </ae-overlay>
</template>

<script>
import AeOverlay from '../aeOverlay/aeOverlay.vue';
import AeButton from '../aeButton/aeButton.vue';
import AeIcon from '../aeIcon/aeIcon.vue';

export default {
  name: 'ae-modal-light',
  props: {
    /**
     * Modal title
     */
    title: String,
  },
  components: { AeOverlay, AeButton, AeIcon },
  methods: {
    close() {
      /**
       * Close event
       *
       * @event close
       * @type {undefined}
       */
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../styles/variables/old_vars';

  .ae-overlay {
    display: flex;
    padding: 10px;
    box-sizing: border-box;

    .ae-modal-light {
      margin: auto;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(60, 60, 60, 0.1);
      background: linear-gradient(to bottom, white, #f1f4f7);

      h1 {
        font-size: 24px;
        font-weight: bold;
        margin: 10px 0 7px 0;
        text-align: center;
      }

      main {
        text-align: center;
        color: $grey;
        line-height: 1.44;
      }

      .buttons {
        display: flex;
        justify-content: space-around;
        margin-top: 25px;
      }
    }
  }
</style>
