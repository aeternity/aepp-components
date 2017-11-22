import AeMenuEntry from './../aeMenuEntry/aeMenuEntry.vue'
import AeIdentityAvatar from './../aeIdentityAvatar/aeIdentityAvatar.vue'

export default {
	name: 'AeMenu',
	components : {
		'ae-identity-avatar': AeIdentityAvatar,
		'ae-menu-entry': AeMenuEntry,
	},
	props : {
		'entries' : {
			type : Array
		},
		'showBurger' : {
			type : Boolean,
			defaul:true
		},
		'navopen' : {
			type : Boolean,
			default: false
		},
		'identity' : {
			type : Object
		}
	},
	data : function() {
		return {
			navopen : false,
		}
	},
	computed : {
		thisclass : function() {
			return {
				'ae-menu' : true,
				'open' : this.navopen,
			};
		},
	},
	methods : {
		toggleopen : function() {
			this.navopen = !this.navopen;
		}
	},
}
