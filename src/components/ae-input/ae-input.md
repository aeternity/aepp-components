```jsx
  <ae-input placeholder="Plain" />
``` 

```jsx
  <ae-input label="With Header" placeholder="With Header">
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
  <ae-input label="Component" placeholder="component">
    <template slot="header">
      header
    </template>
    <ae-toolbar slot="footer">
      This field is &nbsp; <a href="#">mandatory</a>
    </ae-toolbar>
  </ae-input>
``` 

```jsx
  <ae-input label="Component" placeholder="component" error>
    <template slot="header">
      header
    </template>
    <ae-toolbar slot="footer">
      This field is mandatory
    </ae-toolbar>
  </ae-input>
``` 
