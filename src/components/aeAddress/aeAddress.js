import AeIdentityAvatar from '../aeIdentityAvatar/aeIdentityAvatar.vue'
function start_and_end(str, start=6, end=6) {
  return str.substr(0, start+2)
    + '…'
    + str.substr(str.length - end, str.length);
}
function addressValid(address) {
  return /^0x[0-9a-fA-F]{40}$/i.test(address)
}
export default {
  name: "ae-address",
  props : {
    'address' : {
      type : String,
      required: true,
      validator: function (address) {
        return addressValid(address)
      }
    },
    'show-avatar' : {
      type : Boolean,
      default : false
    },
    'size' : {
      type : String,
      default : 'full'
    }
  },
  computed : {
    cssClass() {
      return {
        ['size-' + this.size] : true
      }
    },
    displayAddress() {
      if(this.size == 'full')
        return this.address
      return start_and_end(this.address)
    }
  },
  components : {
    AeIdentityAvatar
  }
}
