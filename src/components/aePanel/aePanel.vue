<template>
  <router-link v-if="to" class="ae-panel" :to="to">
    <div class="progressbar" :style="progressbarStyle(ratioTop)" />
    <div class="content">
      <header v-if="title || closeHandler">
        <h1>{{title}}</h1>
        <ae-close-button @click="closeHandler" />
      </header>
      <slot />
    </div>
    <div class="progressbar" :style="progressbarStyle(ratioBottom)" />
  </router-link>
  <div v-else class="ae-panel">
    <div class="progressbar" :style="progressbarStyle(ratioTop)" />
    <div class="content">
      <header v-if="title || closeHandler">
        <h1>{{title}}</h1>
        <ae-close-button @click="closeHandler" />
      </header>
      <slot />
    </div>
    <div class="progressbar" :style="progressbarStyle(ratioBottom)" />
  </div>
</template>

<script>
  import AeCloseButton from '../aeCloseButton/aeCloseButton.vue';

  export default {
    name: "ae-panel",
    props: {
      to: [String, Object],
      ratioTop: { type: Number, required: false },
      ratioBottom: { type: Number, required: false },
      title: { type: String, required: false },
      closeHandler: { type: Function, required: false },
    },
    components: { AeCloseButton },
    methods: {
      progressbarStyle(ratio) {
        const pc = ratio * 100;
        return {
          display: typeof ratio === 'number' ? 'block' : 'none',
          backgroundImage:
            `linear-gradient(to right, var(--maegenta) ${pc}%, var(--aubergine) ${pc}%)`,
        };
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ae-panel {
    border-radius: 10px;
    box-shadow: 0 4px 8px 2px rgba(60, 60, 60, 0.1); // added 2px spread
    max-width: $container-width;
    margin: 20px auto;
    box-sizing: border-box;
    overflow: hidden;
    display: block;
    text-decoration: none;
    background-color: $white;
    color: inherit;
    @media (max-width: $container-width) {
      margin-left: 10px;
      margin-right: 10px;
    }
    @media (max-width: $screen-phone) {
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .progressbar, .underline {
      content: "";
      display: block;
      width: 100%;
      height: 4px;
    }
    .underline {
      background-color: $maegenta;
    }

    .content {
      padding: 30px;
      @media (max-width: $screen-phone) {
        padding: 20px;
      }

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
    }
  }
</style>
