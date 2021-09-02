import { currencyList } from 'utils'

const initialState = {
  currency: 'usd',
  currencySymbol: '$',
  configLoaded: false,
  data: null,
  error: false,
  isLoading: false,
  themeOn: false,
}

export const CHANGE_CURRENCY = 'CHANGE_CURRENCY'
export const GET_GLOBAL_DATA_ERROR = 'GET_GLOBAL_DATA_ERROR'
export const GET_GLOBAL_DATA_PENDING = 'GET_GLOBAL_DATA_PENDING'
export const GET_GLOBAL_DATA_SUCCESS = 'GET_GLOBAL_DATA_SUCCESS'
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
        data: action.payload,
        isLoading: false,
        configLoaded: true,
      }
    case TOGGLE_THEME:
      return { ...state, themeOn: !state.themeOn }

    default:
      return state
  }
}

export default configReducer

// selectors
// const getGlobalData = async () => {
//   setIsLoading(true)
//   try {
//     const { data } = await axios('https://api.coingecko.com/api/v3/global')
//     setIsLoading(false)
//     setGlobal(data.data)
//   } catch (error) {
//     console.log('Global API Error!')
//     console.log(error)
//   }
// }
