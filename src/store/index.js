import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import allCoins from './allCoins'
import coin from './coin'
import config from './config'
import portfolio from './portfolio'
import search from './search'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const configKeeps = {
  key: 'config',
  storage: storage,
  whitelist: ['currency', 'currencySymbol', 'themeOn'],
}

const portfolioKeeps = {
  key: 'portfolio',
  storage: storage,
  whitelist: ['myCoins'],
}

const allCoinsKeeps = {
  key: 'allCoins',
  storage: storage,
  whitelist: ['timeInterval', 'apiParams'],
}

// all our reducers. we can access these on any page
const rootReducer = combineReducers({
  allCoins: persistReducer(allCoinsKeeps, allCoins),
  coin,
  config: persistReducer(configKeeps, config),
  portfolio: persistReducer(portfolioKeeps, portfolio),
  search,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 })

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)),
  // composeWithDevTools(applyMiddleware(thunk), trace: true, traceLimit: 25),
)

export const persistor = persistStore(store)
