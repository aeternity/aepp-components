export default {
  methods: {
    forwardEvent(event) {
      this.$emit(event.type, event);
    },
  },
};
