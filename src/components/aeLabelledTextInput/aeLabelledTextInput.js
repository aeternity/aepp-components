import AeValidatedTextInput from '../aeValidatedTextInput/aeValidatedTextInput.vue'

export default {
  name: 'ae-labelled-text-input',
  components: {
    AeValidatedTextInput
  },
  data () {
    return {
      errorId: undefined,
      internalValue: this.value
    }
  },
  props: {
    defaultErrorMessage: {
      type: String
    },
    errorMessages: {
      type: Object,
      default () {
        return {}
      }
    },
    label: {
      type: String
    },
    validateOnBlur: {
      type: Function
    },
    validateOnInput: {
      type: Function
    },
    placeholder: {
      type: String
    },
    validMessage: {
      type: String
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    _errorMessage () {
      if (!this.errorId) {
        return
      }

      const message = this.errorMessages[this.errorId] || this.defaultErrorMessage
      return message
    },
    _validMessage () {
      if (!this.errorId) {
        return this.validMessage
      }
    },
    internalInputId () {
      return this._uid
    }
  },
  methods: {
    onValidate (value) {
      this.errorId = value
      this.$emit('validation', value)
    },
    onBlur (value) {
      this.$emit('blur', value)
    },
    onFocus () {
      this.$emit('focus')
    },
    onInput (value) {
      this.$emit('input', value)
    },
    clearInput () {
      this.internalValue = ''
      this.$emit('input', '')
    },
    forwardKeyEvent (event) {
      this.$emit(event.type, event)
    }
  },
  watch: {
    value (val) {
      this.internalValue = val
    }
  }
}
