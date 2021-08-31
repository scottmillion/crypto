import { combineReducers, createStore, applyMiddleware } from 'redux'
import allCoins from './allCoins'
import config from './config'
import portfolio from './portfolio'
import thunk from 'redux-thunk'

// all our reducers. we can access these on any page
const reducers = combineReducers({
  allCoins,
  config,
  portfolio,
})

export const store = createStore(reducers, applyMiddleware(thunk))
