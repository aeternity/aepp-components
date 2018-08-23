```jsx
  <ae-check name="hello">
    <ae-text>Checking</ae-text> 
  </ae-check>
``` 

### slot: content
```jsx
  <ae-check name="content" extend>
    <div slot="content">
      <h1> heading </h1>
      <span>sub heading </span>
    </div>
  </ae-check>
``` 

### prop: align
```jsx
  <ae-check name="align" align="left" extend>
    <div slot="content">
      <h1> heading </h1>
      <span>sub heading </span>
    </div>
  </ae-check>
``` 

### prop: type
```jsx
  <ae-list>
    <ae-list-item>
        <ae-check name="align" type="radio" align="left" extend>
          <div slot="content">
            <h1> radio 1 </h1>
          </div>
        </ae-check>
    </ae-list-item>
    <ae-list-item>
        <ae-check name="align" type="radio" align="left" extend>
          <div slot="content">
            <h1> radio 2 </h1>
          </div>
        </ae-check>
    </ae-list-item>
  </ae-list>
``` 

### prop: disabled
```jsx
  <ae-check name="hello" disabled>
    <ae-text>Checking</ae-text> 
  </ae-check>
``` 
