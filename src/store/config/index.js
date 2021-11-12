import { currencyList } from 'utils'

const initialState = {
  currency: 'usd',
  currencySymbol: '$',
  data: null,
  displayMenu: false,
  error: false,
  isLoading: false,
  themeOn: false,
}

export const CHANGE_CURRENCY = 'CHANGE_CURRENCY'
export const GET_GLOBAL_DATA_ERROR = 'GET_GLOBAL_DATA_ERROR'
export const GET_GLOBAL_DATA_PENDING = 'GET_GLOBAL_DATA_PENDING'
export const GET_GLOBAL_DATA_SUCCESS = 'GET_GLOBAL_DATA_SUCCESS'
export const TOGGLE_MENU = 'TOGGLE_MENU'
export const TOGGLE_THEME = 'TOGGLE_THEME'

function configReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return {
        ...state,
        currency: action.payload,
        currencySymbol: currencyList[action.payload].symbol,
      }
    case GET_GLOBAL_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    case GET_GLOBAL_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case GET_GLOBAL_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      }
    case TOGGLE_MENU:
      return { ...state, displayMenu: !state.displayMenu }
    case TOGGLE_THEME:
      return { ...state, themeOn: !state.themeOn }

    default:
      return state
  }
}

export default configReducer
