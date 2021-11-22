import React from 'react'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import RootReducer from './reducers'

export const history = createBrowserHistory()


const initialState = {}


export default function configureStore(initialState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    RootReducer(history),
    composeEnhancer(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
      ),
    ),
  )

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(RootReducer(history));
    });
  }

  return store;
}