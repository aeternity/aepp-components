import aeIdentityAvatar from './../aeIdentityAvatar/aeIdentityAvatar.vue'
import helperMixin from './../../mixins/helper'
export default {
	name: 'ae-identity',
	components: {
		'ae-identity-avatar': aeIdentityAvatar
	},
	data: function() {
		return {}
	},
	props: {
		balance: {
			type: [String, Number],
			default: 0,
			required: true
		},
		address: {
			type: [String],
			default: '0x0',
			required: true
		},
		active: {
			type: Boolean,
			required: false,
			default: true
		},
		collapsed: {
			type: Boolean,
			default: false
		}
	},
	mixins: [
		helperMixin
	],
	computed: {
		amount() {
			return helperMixin.methods.readableEther(this.balance)
		},
		shortAddress() {
			return this.address.substr(0, 6)
		},
		classObject: function() {
			let classes = {
				'ae-identity': true,
				'collapsed': this.collapsed,
				'_active_yes': this.active,
				'_active_no': !this.active
			}
			return classes
		},
		hasSlot() {
			return this.$slots.default
		}
	}
}
