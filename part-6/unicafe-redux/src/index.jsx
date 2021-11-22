import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import counterReducer from "./reducer";

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  const countHandler = (_type) => {
    console.log(`dispatch of type ${_type}`);
    store.dispatch({
      type: _type,
    });
  };

  return (
    <div>
      <button onClick={() => countHandler("GOOD")}>good</button>
      <button onClick={() => countHandler("OK")}>ok</button>
      <button onClick={() => countHandler("BAD")}>bad</button>
      <button onClick={() => countHandler("ZERO")}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

renderApp();
store.subscribe(renderApp);
