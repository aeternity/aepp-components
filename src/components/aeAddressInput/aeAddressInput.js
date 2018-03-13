import AeTextarea from '../aeTextarea/aeTextarea.vue'

export default {
  name: 'ae-address-input',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  components: { AeTextarea },
  computed: {
    formattedValue () {
      return this.formatAddress(this.value).address
    }
  },
  methods: {
    handleInput () {
      const { selectionStart, value } = this.$el
      const { address, cursor } = this.formatAddress(value, selectionStart)
      if (address !== value) {
        this.$el.value = address
        const setSelection = () => this.$el.setSelectionRange(cursor, cursor)
        setSelection()
        setTimeout(setSelection, 0)
      }
      this.$emit('input', address.replace(/[ \n]/g, ''))
    },
    handleCopy (event) {
      const { selectionStart: s1, selectionEnd: s2, value } = event.target
      event.clipboardData.setData(
        'text/plain',
        value.slice(Math.min(s1, s2), Math.max(s1, s2)).replace(/[ \n]/g, '')
      )
      event.preventDefault()
    },
    formatAddress (address, cursor = address.length) {
      if (['', '0'].includes(address)) return { address, cursor }

      let [begin, end] = [
        [address.startsWith('0x') ? 2 : 0, cursor],
        [cursor]
      ].map(args => address.slice(...args).replace(/[^A-Fa-f0-9]/g, ''))

      begin = `0x${begin}`

      const splitBy = 7
      const addSpaces = (address, firstLength) => {
        const fl = firstLength || splitBy
        const res = []
        let i = -1
        const group = () =>
          i >= 0
            ? address.slice(splitBy * i + fl, splitBy * (i + 1) + fl)
            : address.slice(0, fl)
        while (group() !== '') {
          res.push(group())
          i++
        }
        return [res.join(' '), res.length ? res[res.length - 1].length : 0]
      }

      let lastLength
      ;[begin, lastLength] = addSpaces(begin)
      ;[end] = addSpaces(end, splitBy - lastLength)

      let res = `${begin}${lastLength === splitBy ? ' ' : ''}${end}`.slice(
        0,
        47
      )
      const lineBreakPos = (splitBy + 1) * 3 - 1
      res = res[lineBreakPos]
        ? `${res.slice(0, lineBreakPos)}\n${res.slice(lineBreakPos + 1)}`
        : res

      return { address: res, cursor: begin.length }
    }
  }
}
