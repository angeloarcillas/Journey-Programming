// useContext: share data w/out passing props

import { React, useContext } from "react";

// set data
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

// set context
const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    // scope context data
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar /> {/** inherit value */}
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  // use value from nearest parent provider
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      {" "}
      I am styled by theme context!{" "}
    </button>
  );
}

//////////////////////////////////////////////
// useReducer: dispatch an event

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}

//////////////////////////////////////////
// useMemo: only recompute the memoized value when a dependency has changed.
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

/////////////////////////////////////////////
// useCallback: use the callback instead of re-rendering
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
