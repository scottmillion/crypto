import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import allCoins from './allCoins'
import coin from './coin'
import config from './config'
import portfolio from './portfolio'
import search from './search'
import thunk from 'redux-thunk'

// all our reducers. we can access these on any page
const reducers = combineReducers({
  allCoins,
  coin,
  config,
  portfolio,
  search,
})

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
)
