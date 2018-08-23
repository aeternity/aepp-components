import AeIdentityAvatar from '../aeIdentityAvatar/aeIdentityAvatar.vue';
import aeIcon from './../aeIcon/aeIcon.vue';
function startAndEnd (str, start = 6, end = 6) {
  return str.substr(0, start + 2) +
    '…' +
    str.substr(str.length - end, str.length);
}
function addressValid (address) {
  return /^((0x[0-9a-fA-F]{40})|([ao]k\$[0-9a-zA-Z]{94}))$/.test(address);
}

/**
 * Displays an Ethereum Address and an optional blockie avatar
 */
export default {
  name: 'ae-address',
  props: {
    /**
     * The address to display. The validity is checked by a regex
     */
    'address': {
      type: String,
      required: true,
      validator: function (address) {
        return addressValid(address);
      }
    },

    /**
     * Whether to show an avatar in front of the address
     */
    'show-avatar': {
      type: Boolean,
      default: false
    },

    /**
     * Show the 'full' address, 'chunked' (full address grouped by chunks )
     * or 'short' (show first 6 and last 6 characters)
     */
    'size': {
      type: String,
      default: 'full'
    },
    /**
     * Show the account name
     */
    'name': {
      type: String,
      required: false
    },
    /**
     * show verified checkmark if name or address is recognized/registered
     */
    'verified': {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * show full address splitted into 2 colums
     */
    'chunkHalf': {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    displayAddress () {
      if (this.size === 'full') {
 return this.address;
}
      if (this.size === 'chunked') {
 return this.address.match(/.{1,7}/g);
}
      return startAndEnd(this.address);
    },
    displayName () {
      return this.name;
    },
    textIndentModifier () {
      return `_text-indent_${this.showAvatar}`;
    },
    chunkModifier () {
      return `_chunk-half_${this.chunkHalf}`;
    }
  },
  components: {
    AeIdentityAvatar,
    aeIcon
  }
};
