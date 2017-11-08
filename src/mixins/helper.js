const blockies = require('ethereum-blockies-png');
const unit = require('ethjs-unit');
const numeral = require('numeral');

//a "stupid" web3 just for conversions
let web3 = new Web3();

export default {
	methods: {
		blockie: function (address) {
			return blockies.createDataURL({
				seed: address
			})
		},
		readableToken: function(balance) {
			return numeral(unit.fromWei(balance.toString(10), 'ether')).format('0,0.[000]');
		},
		readableEther: function(balance) {
			return numeral(unit.fromWei(balance.toString(10), 'ether')).format('0,0.[000]');
		}
	}
}
