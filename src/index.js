import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";

// REDUX CODE

const increment = () => {
  return { type: "increment" };
};

const decrement = () => {
  return { type: "decrement" };
};

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

// REACT CODE

const render = () => {
  ReactDOM.render(
    <CounterApp state={store.getState()} />,
    document.getElementById("root")
  );
};
render();

// SUBSCRIBE RENDER TO RENDER AT STATE CHANGE
store.subscribe(render);

//COMPONENT - STATE SENDED VIA PROPS

function CounterApp(props) {
  const state = props.state;

  const onIncrementButtonClicked = () => {
    store.dispatch(increment());
  };

  const onDecrementButtonClicked = () => {
    store.dispatch(decrement());
  };

  return (
    <main className="main">
      <h1 className="title"> {state} </h1>
      <div className="buttonWrap">
        <button className="button" onClick={onIncrementButtonClicked}>
          +
        </button>
        <button className="button" onClick={onDecrementButtonClicked}>
          -
        </button>
      </div>
    </main>
  );
}
