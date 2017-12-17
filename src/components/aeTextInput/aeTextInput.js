import AeButton from '../aeButton/aeButton.vue'
import AeIcon from '../aeIcon/aeIcon.vue'

export default {
  name: 'ae-text-input',
  components: {
    AeButton,
    AeIcon
  },
  data(){
    return {
      internalValue: this.value
    }
  },
  props: {
    inputId: {
      type: [String],
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    closeButtonType: {
      type: String,
      default: 'normal'
    },
    hasError: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      validator: function (value) {
        return value > 0 && parseInt(value) === value
      }
    }
  },
  computed:{
    validModifier(){
      return this.hasError ? '_is-valid_false' : '_is-valid_true'
    }
  },
  methods: {
    onClearRequest() {
      const value = this.$refs.input.value
      this.$emit('clearRequest', value)
    },
    onInput() {
      const value = this.$refs.input.value
      this.$emit('input', value)
    },
    onFocus() {
      this.$emit('focus')
    },
    onBlur() {
      const value = this.$refs.input.value
      this.$emit('blur', value)
    },
    forwardKeyEvent(event){
      this.$emit(event.type, event)
    }
  },
  watch:{
    value(val){
      this.internalValue = val
    }
  }
}
