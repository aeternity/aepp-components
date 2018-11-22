<template>
  <ae-textarea
    class="ae-address-input"
    type="textarea"
    monospace
    :value="formattedValue"
    @input="handleInput"
    v-remove-spaces-on-copy
  />
</template>
<script>
import AeTextarea from '../aeTextarea/aeTextarea.vue';
import removeSpacesOnCopy from '../../directives/removeSpacesOnCopy';

export default {
  name: 'ae-address-input',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  directives: { removeSpacesOnCopy },
  components: { AeTextarea },
  computed: {
    formattedValue() {
      return this.formatAddress(this.value).address;
    },
  },
  methods: {
    handleInput() {
      const { selectionStart, value } = this.$el;
      const { address, cursor } = this.formatAddress(value, selectionStart);
      if (address !== value) {
        this.$el.value = address;
        const setSelection = () => this.$el.setSelectionRange(cursor, cursor);
        setSelection();
        setTimeout(setSelection, 0);
      }
      this.$emit('input', address.replace(/[ \n]/g, ''));
    },
    formatAddress(address, cursor = address.length) {
      if (['', 'a', 'ak'].includes(address)) return { address, cursor };

      const [beginUnprefixed, end] = [[address.startsWith('ak_') ? 3 : 0, cursor], [cursor]]
        .map(args => address.slice(...args).replace(/[^1-9A-HJ-NP-Za-km-z]/g, ''));

      const begin = `ak_${beginUnprefixed}`;

      const splitBy = 3;
      const addSpaces = (addressPart, firstLength) => {
        const fl = firstLength || splitBy;
        const res = [];
        let i = -1;
        const group = () => (i >= 0
          ? addressPart.slice(splitBy * i + fl, splitBy * (i + 1) + fl)
          : addressPart.slice(0, fl));
        while (group() !== '') {
          res.push(group());
          i += 1;
        }
        return [res.join(' '), res.length ? res[res.length - 1].length : 0];
      };

      const [beginS, lastLength] = addSpaces(begin);
      const [endS] = addSpaces(end, splitBy - lastLength);

      const res = `${beginS}${endS && lastLength === splitBy ? ' ' : ''}${endS}`.slice(0, 70);

      return { address: res, cursor: beginS.length };
    },
  },
};
</script>
<style lang="scss" scoped>
.ae-address-input.ae-textarea {
  resize: none;
  text-align: center;
  min-height: 0;
  height: 90px;
  line-height: 29px;
}
</style>
