import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { reducers } from "./reducers";

//* First way
// import { composeWithDevTools } from 'redux-devtools-extension';
// export const store = createStore(
//     reducers,
//     composeWithDevTools()
// );

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));