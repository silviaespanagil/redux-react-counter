# React & Redux: Counter App
## _Learning exercise_

¡Hola mundo!

I've been working with React for a couple of months and I read a lot of the use of Redux to manage the app states ♻️.  So I  decided to start a CodeCademy Course called [Learn Redux](https://www.codecademy.com/learn/learn-redux)

This is the first proposed project in where we apply Redux in a very simple app that allows the user, to add and subtract a number as they click a button. And the new state will render with every update.

![Redux Counter](https://user-images.githubusercontent.com/81619759/131163450-6a4a9042-a3e2-4926-8fe8-2fb24e493ced.gif)

🚀  [You can try it yourself](https://silviaespanagil.github.io/redux-react-counter/)

## Some Requirements 📋

- Use React
- Import Redux for State Management
- New state must render with every update

## Built with 🔨
- Visual Code Studio: as code editor
- React
- Redux

## Development ⌨️

The code has two main divisions, one for the Redux Code and another one for the React Code. Notice also that, as this is my first project using both I did not did different components and everything is developed in my index.js

After installin Redux and importing the `{createStore}` function I declared my initialState and did my Reducer. The Reducer contemplates two cases and one default: an increment that will take the state and add 1, a decrement that will take the state and subtract 1 and a default that will take the actual value of our state. With the Reducer declared I created my app Store.

```javascript
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
```

Now is component time 🕒. Here I created the JSX to create the User Interface. Now here we  need a couple things to happen.

#### Create a function for the onClick action & a dispatch
As we need the case "increment" or "decrement" to happen we must create an action for  each, this actions are created as functions that returns the action type this  way, using the `store.dispatch(f)` method the reducer is called and the state is updated ↪️.

#### Send our state to the component
In the `ReactDOM.render` we are asking React to render our only component. But our component needs the State that is being managed by our Store, so ✈️ we  must send ✈️ our `store.getState()` via props so we  can use it inside our component 

#### Re-render when the state changes
What use a counter has if we can't see, on real time, the count 1️⃣🔟. For so we need to tell our app to re-render when the Store State changes.

So we will wrap up our `ReactDOM.render()` in a Render Function that we will not only call but we will also subscribe to ensure that anytime the state changes, it renders.

```javascript
const render = () => {
  ReactDOM.render(
    <CounterApp state={store.getState()} />,
    document.getElementById("root")
  );
};
render();

// SUBSCRIBE RENDER TO RENDER AT STATE CHANGE
store.subscribe(render);
```

## Run my code 🔧

Install dependencies
`npm install` 

Run it
`npm start`

## Codefactor
[![CodeFactor](https://www.codefactor.io/repository/github/silviaespanagil/redux-react-counter/badge)](https://www.codefactor.io/repository/github/silviaespanagil/redux-react-counter)
