```js
let identity = {
	address: "0x0",
	name: "My Address"
}
let menuEntries = [
	{
		label: 'Content One',
		link: '/content1'
	},
	{
		label: 'Content Two',
		link: '/content2'
	},
]
<ae-menu :identity="identity" :entries="menuEntries"></ae-menu>
```
