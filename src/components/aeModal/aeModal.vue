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
        <!-- @slot Modal content -->
        <slot />
      </main>
    </div>
  </ae-overlay>
</template>
<script>
import AeHeader from '../aeHeader/aeHeader.vue';
import AeButton from '../aeButton/aeButton.vue';
import AeOverlay from '../aeOverlay/aeOverlay.vue';
import AeIcon from '../aeIcon/aeIcon.vue';

export default {
  name: 'ae-modal',
  props: {
    /**
     * Modal title
     */
    title: String,
  },
  components: {
    AeHeader,
    AeButton,
    AeOverlay,
    AeIcon,
  },
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
@import '../../styles/fallback/mixins';

.ae-overlay {
  .ae-modal {
    background: linear-gradient(to bottom, white, #F1F4F7);
  }

  @include abovePhone {
    $overlay-padding: 10px;

    display: flex;
    padding: $overlay-padding;
    box-sizing: border-box;

    .ae-modal {
      margin: auto;
      min-width: $screen-phone - 2 * $overlay-padding;
      border-radius: 10px;
    }

    .phone {
      display: none;
    }

    main {
      header {
        display: flex;
        justify-content: space-between;

        h1 {
          font-size: 28px;
          line-height: 50px;
          font-weight: 500;
          margin: 0;
        }
      }

      padding: 30px;
    }
  }

  @include phone {
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
