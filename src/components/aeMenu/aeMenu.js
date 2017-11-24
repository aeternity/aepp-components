import AeMenuEntry from './../aeMenuEntry/aeMenuEntry.vue'
import AeIdentityAvatar from './../aeIdentityAvatar/aeIdentityAvatar.vue'
/**
* Displays a menu
*/
export default {
  name: 'ae-menu',
  components: {
    'ae-identity-avatar': AeIdentityAvatar,
    'ae-menu-entry': AeMenuEntry
  },
  props: {
    /**
    * List of menu items, each entry has a label and a link
    */
    'entries': {
      type: Array
    },

    /**
    * Show a menu burger icon?
    */
    'showBurger': {
      type: Boolean,
      default: true
    },

    /**
    * Is the menu opened by default?
    */
    'navopen': {
      type: Boolean,
      default: false
    },

    /**
    * Display identity info (avatar and name) in the menu
    */
    'identity': {
      type: Object
    }
  },
  data: function () {
    return {
      navopen: false
    }
  },
  computed: {
    thisclass: function () {
      return {
        'ae-menu': true,
        'open': this.navopen
      }
    }
  },
  methods: {
    toggleopen: function () {
      this.navopen = !this.navopen
    }
  }
}
