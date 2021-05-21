# React JS

## JSX

**Single line JSX**
```js
const element = <p>Hello World!</p>;
```

**Multi-line JSX**

```js
const element = (
  <div>
    <p>Hello World!</p>
  </div>
);
```

**JSX append child element**
```js
// v1
const childElement = <Child>Hello World!</Child>;
const element = <Parent children={childElement} />; // <Parent />: Self closing element

// v2
const element = <Parent><Child /></Parent>;
```

**Using spread operator to spread props to element**
```js
const children = "Hello World!";
const className = "container";
const props = { children, className };
const element = <div {...props} />;
```

**Fragments**
```js
// using React module
const fragment = <React.Fragment><p>Hello World!</p></React.Fragment>;

// shorthand: <></>
const fragment = <> <p>Hello World!</p> </>;
```

**JSX condition**
<Choose>
  <When condition={isAuth}>
    <button>Logout</button>;
  </When>
  <When condition={!isAuth}>
    <button>Login</button>;
  </When>
</Choose>

## Props

**Using Function**
```js
const Element = (props) => {
  return <h1>{ props.name }</h1>;
}
```

**Using Class**
```js
class Element extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{ this.props.name }</h1>;
  }
}
```

**Setting props to component**
```js
const element = <Element name="John Doe"/>
```

## State
- State is similar to props, but it is private and fully controlled by the component.

```js
class Element extends React.Component {
  constructor(props) {
    super(props)
    // init state
    this.state = {
      // default state
      date: new Date(),
    }
    // bind `this` to current instance
    this.handleClick = this.handleClick.bind(this);
  }
   
   handleClick() {
     // set state
     this.setState({date: new Date()});
   }

    render() {
      // get state
    return <p>It is {this.state.date.toLocaleTimeString()}.</p>
  }
}
```

**Auto-bind methods**
```js
class Element extends React.Component {
  constructor(props) {
    super(props);
    this.autoBindMethods();
  }

  private autoBindMethods() {
    const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this))

    methods.filter(method => method !== 'constructor')
      .forEach(method => this[method] = this[method].bind(this))
  }
}
```

## Hooks

**useState**
```js
import { useState } from "react";

function App() {
const [count, setCount] = useState(0);

return <button onClick={ () => setCount(count + 1) }>{ count }</button>
}
```

**useEffect**
```js
import React, { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);

  // run when a dendency changes
  useEffect(() => {
    console.log("count state changed.")
  }, [count]); // []: set dependency

  return 
    <button onClick={() => setCount(count + 1)}>{ count }</button>
   );
}
```

**useEffect lifecycle**
```js
componentDidMount() { /** initialized */ }
componentDidUpdate() { /** state update */ }
componentDidUnmount() { /** destroy */ }
```

**useRef**
```jsx
// reference a HTML  element
const App = () => {
  // create ref
  const inputRef = useRef(null);
  // get ref
  const handleClick = () => console.log(inputRef.current);
  return (
    <div>
      {/* set ref */}
      <input ref={inputRef} type="text">
      <button onClick={() => handleClick()}>Click</button>
    </div>
    );
}
```

**Previous state value**
```js
 const [count, setCount] = useState(0)

const addOne = () => {
    setCount(prevValue => prevValue + 1); // 1
}
```

**ref only rendered  once**
```js
const ref = React.useRef({ hasRendered: false });

  React.useEffect(() => {
    if (!ref.current.hasRendered) {
      ref.current.hasRendered = true;
      console.log("perform action only once!");
    }
```

## Notes
**thinking in react**
```
1. start with a mock: design the UI
2. break the ui into component: break into several component
3. build a static version in react: implement on react w/ static data
4. Identify The Minimal (but complete) Representation Of UI State: use DRY approach
5. Identify Where Your State Should Live: identify the state hierarchy
6. Add Inverse Data Flow

React is all about one-way data flow down the component hierarchy.
```

```
1. to prevent render: return null
2. key on list: helps react identify which item changed
3. super(props): same as class `A extends B {}`
```

**catch react error boundary**
- As of React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree.
```js
import { ErrorBoundary } from "react-error-boundary";

return (
<ErrorBoundary FallbackComponent={ErrorFallback}>
  <Header />
</ErrorBoundary>
);

const ErrorFallback = ({ error }) => {
  return (
    <div role="alert">
      <p>Oops, there was an error:</p>
      <p style={{ color: "red" }}>{error.message}</p>
    </div>
  );
}
```

**Advance passing props**
```jsx
const Box = ({style, size, className = '', ...props}) => {
  const sizeClassName = size ? `box--${size}` : '';
  return (
    <div
      // set multiple classname 
      className={`box ${className} ${sizeClassName}`}
      // spead other style pops object
      style={{fontStyle: 'italic', ...style}}
      // spread other props
      {...props}
    />
  )
}

const element = (
  <div>
    <Box size="small" style={{backgroundColor: 'lightblue'}}>
      small lightblue box
    </Box>
    <Box size="medium" style={{backgroundColor: 'pink'}}>
      medium pink box
    </Box>
    <Box size="large" style={{backgroundColor: 'orange'}}>
      large orange box
    </Box>
    <Box>sizeless box</Box>
  </div>
)
```