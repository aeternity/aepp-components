### component
```vue
  <ae-toolbar>
    Hello world!
  </ae-toolbar>
``` 

### prop: fill
```vue
  <ae-toolbar fill="neutral">
    neutral fill
  </ae-toolbar>
``` 

```vue
  <ae-toolbar fill="secondary">
    secondary fill
  </ae-toolbar>
```

```vue
  <ae-toolbar fill="primary">
    primary fill
  </ae-toolbar>
```

```vue
  <ae-toolbar fill="alternative">
    alternative fill
  </ae-toolbar>
```

### slot: left, right
```vue
  <ae-toolbar>
    <span>Left</span>
    center
    <span>Right</span>
  </ae-toolbar>
``` 

```vue
  <ae-toolbar align="left">
    <span>Left</span>
    center
    <span>Right</span>
  </ae-toolbar>
``` 

```vue
  <ae-toolbar align="center">
    <span>Left</span>
    center
    <span>Right</span>
  </ae-toolbar>
``` 

```vue
  <ae-toolbar align="right">
    <span>Left</span>
    center
    <span>Right</span>
  </ae-toolbar>
``` 

```vue
  <ae-toolbar align="justify">
    <span>Left</span>
    center
    <span>Right</span>
  </ae-toolbar>
``` 

### prop: disabled
```vue
  <ae-toolbar disabled>
    disabled
  </ae-toolbar>
``` 

```vue
  <ae-toolbar fill="neutral" disabled>
    neutral fill
  </ae-toolbar>
``` 

```vue
  <ae-toolbar fill="secondary" disabled>
    secondary fill
  </ae-toolbar>
```

```vue
  <ae-toolbar fill="primary" disabled>
    primary fill
  </ae-toolbar>
```

```vue
  <ae-toolbar fill="alternative" disabled>
    alternative fill
  </ae-toolbar>
```

### buttons
```vue
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

```vue
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

```vue
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

```vue
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
