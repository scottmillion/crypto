const initialState = {
  data: null,
  error: false,
  isLoading: false,
}

export const GET_COIN_DATA_ERROR = 'GET_COIN_DATA_ERROR'
export const GET_COIN_DATA_PENDING = 'GET_COIN_DATA_PENDING'
export const GET_COIN_DATA_SUCCESS = 'GET_COIN_DATA_SUCCESS'

function coinReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COIN_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    case GET_COIN_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case GET_COIN_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      }
    default:
      return state
  }
}

export default coinReducer
