const initialState = {
  data: [],
  isLoading: false,
  showPopUp: false,
  value: '',
  error: false,
}

export const GET_COINS_DATA_ERROR = 'GET_COINS_DATA_ERROR'
export const GET_COINS_DATA_PENDING = 'GET_COINS_DATA_PENDING'
export const GET_COINS_DATA_SUCCESS = 'GET_COINS_DATA_SUCCESS'
export const SET_VALUE = 'SET_VALUE'
export const TOGGLE_SHOW_POP_UP = 'TOGGLE_SHOW_POP_UP'

function portfolioReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COINS_DATA_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      }
    case GET_COINS_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case GET_COINS_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false,
      }
    case SET_VALUE:
      return {
        ...state,
        value: action.payload,
      }
    case TOGGLE_SHOW_POP_UP:
      return {
        ...state,
        showPopUp: !state.showPopUp,
      }
    default:
      return state
  }
}

export default portfolioReducer

// selectors
