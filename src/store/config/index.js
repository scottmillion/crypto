import { currencyList } from 'utils'

const initialState = {
  currency: 'usd',
  currencySymbol: '$',
  themeOn: false,
}

export const CHANGE_CURRENCY = 'CHANGE_CURRENCY'
export const TOGGLE_THEME = 'TOGGLE_THEME'

function configReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return {
        ...state,
        currency: action.payload,
        currencySymbol: currencyList[action.payload].symbol,
      }
    case TOGGLE_THEME:
      return { ...state, themeOn: !state.themeOn }

    // case TOGGLE_THEME:
    //   return { ...state, data: [...state.data, action.payload] }
    // case REMOVE_TODO:
    //   return {
    //     ...state,
    //     data: state.data.filter((el) => el !== action.payload),
    //   }

    default:
      return state
  }
}

export default configReducer

// selectors
