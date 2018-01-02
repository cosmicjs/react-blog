import React from 'react'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import RootReducer from './reducers'

export const history = createHistory()


const initialState = {}

// use redux dev tools compose or compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeEnhancers(
  applyMiddleware(
    thunk,
    routerMiddleware(history)
  )
)

export default createStore(
  RootReducer,
  composedEnhancers
)
