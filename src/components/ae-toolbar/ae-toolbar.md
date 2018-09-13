### component
```jsx
  <ae-toolbar>
    Hello world!
  </ae-toolbar>
``` 

### prop: fill
```jsx
  <ae-toolbar fill="neutral">
    neutral fill
  </ae-toolbar>
``` 

```jsx
  <ae-toolbar fill="default">
    default fill
  </ae-toolbar>
```

```jsx
  <ae-toolbar fill="emphasis">
    emphasis fill
  </ae-toolbar>
```

```jsx
  <ae-toolbar fill="alternative">
    alternative fill
  </ae-toolbar>
```

### slot: left, right
```jsx
  <ae-toolbar>
    <span>Left</span>
    center
    <span>Right</span>
  </ae-toolbar>
``` 

```jsx
  <ae-toolbar align="left">
    <span>Left</span>
    center
    <span>Right</span>
  </ae-toolbar>
``` 

```jsx
  <ae-toolbar align="center">
    <span>Left</span>
    center
    <span>Right</span>
  </ae-toolbar>
``` 

```jsx
  <ae-toolbar align="right">
    <span>Left</span>
    center
    <span>Right</span>
  </ae-toolbar>
``` 

```jsx
  <ae-toolbar align="justify">
    <span>Left</span>
    center
    <span>Right</span>
  </ae-toolbar>
``` 

### prop: disabled
```jsx
  <ae-toolbar disabled>
    disabled
  </ae-toolbar>
``` 

```jsx
  <ae-toolbar fill="neutral" disabled>
    neutral fill
  </ae-toolbar>
``` 

```jsx
  <ae-toolbar fill="default" disabled>
    default fill
  </ae-toolbar>
```

```jsx
  <ae-toolbar fill="emphasis" disabled>
    emphasis fill
  </ae-toolbar>
```

```jsx
  <ae-toolbar fill="alternative" disabled>
    alternative fill
  </ae-toolbar>
```

### buttons
```jsx
  <ae-toolbar align="right">
    <ae-button face="toolbar">
      <ae-icon name="eye" />
      Details
    </ae-button>
    <ae-button face="toolbar">
      <ae-icon name="copy" />
      Copy
    </ae-button>
    <ae-button face="toolbar">
      <ae-icon name="share" />
      Share
    </ae-button>
  </ae-toolbar>
``` 

```jsx
  <ae-toolbar align="justify">
    <ae-button face="toolbar">
      <ae-icon name="eye" />
      Details
    </ae-button>
    <div>
     <ae-button face="toolbar">
       <ae-icon name="copy" />
       Copy
     </ae-button>
     <ae-button face="toolbar">
       <ae-icon name="share" />
       Share
     </ae-button>
    </div>
  </ae-toolbar>
``` 

```jsx
  <ae-toolbar align="justify">
    <ae-button face="toolbar">
      <ae-icon name="eye" />
      Details
    </ae-button>
    <ae-button face="toolbar">
      <ae-icon name="copy" />
      Copy
    </ae-button>
    <ae-button face="toolbar">
      <ae-icon name="share" />
      Share
    </ae-button>
  </ae-toolbar>
``` 

```jsx
  <ae-toolbar align="right">
    <ae-button face="toolbar">
      <ae-icon name="eye" />
    </ae-button>
    <ae-button face="toolbar">
      <ae-icon name="copy" />
    </ae-button>
    <ae-button face="toolbar">
      <ae-icon name="share" />
    </ae-button>
  </ae-toolbar>
``` 
