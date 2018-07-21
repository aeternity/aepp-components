```jsx
  <ae-input placeholder="Plain" />
``` 

```jsx
  <ae-input label="With Header">
    <template slot="header">
      header
    </template>
   </ae-input>
``` 

```jsx
  <ae-input placeholder="component">
    <ae-toolbar slot="footer">
      This field is mandatory
    </ae-toolbar>
  </ae-input>
``` 


```jsx
  <ae-input label="Component" placeholder="...">
    <template slot="header">
      header
    </template>
    <ae-toolbar slot="footer">
      This field is &nbsp; <a href="#">mandatory</a>
    </ae-toolbar>
  </ae-input>
``` 

```jsx
  <ae-input label="Component" placeholder="..." error>
    <template slot="header">
      header
    </template>
    <ae-toolbar slot="footer">
      This field is mandatory
    </ae-toolbar>
  </ae-input>
``` 

```jsx
  <ae-input label="Component" placeholder="0.0" aemount>
    <ae-text slot="header" fill="black">AE</ae-text>
  </ae-input>
``` 

```jsx
  <ae-input label="Component" placeholder="0.0" aemount error>
    <ae-text slot="header" fill="black">AE</ae-text>
    <ae-toolbar slot="footer">
      0.05AE is the minimum amount to send!
    </ae-toolbar>
  </ae-input>
``` 
