```js
let closeHandler = () => {
	alert('close pressed')
}
<ae-panel :title="'The Title'" :closeHandler="closeHandler" :ratioTop="0.4" :ratioBottom="0.6">
	Hello World
</ae-panel>
```
