const initialState = {
  myCoins: [],
  data: [],
  isLoading: false,
  error: false,
}

export const GET_MYCOINS_DATA_ERROR = 'GET_MYCOINS_DATA_ERROR'
export const GET_MYCOINS_DATA_PENDING = 'GET_MYCOINS_DATA_PENDING'
export const GET_MYCOINS_DATA_SUCCESS = 'GET_MYCOINS_DATA_SUCCESS'
export const GET_HISTORIC_DATA_ERROR = 'GET_HISTORIC_DATA_ERROR'
export const GET_HISTORIC_DATA_PENDING = 'GET_HISTORIC_DATA_PENDING'
export const GET_HISTORIC_DATA_SUCCESS = 'GET_HISTORIC_DATA_SUCCESS'

function portfolioReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MYCOINS_DATA_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      }
    case GET_MYCOINS_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case GET_MYCOINS_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false,
      }
    case GET_HISTORIC_DATA_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      }
    case GET_HISTORIC_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case GET_HISTORIC_DATA_SUCCESS:
      // necessary for updating existing coin data
      const filteredCoins = state.myCoins.filter(
        (o) => o.coinId !== action.payload.coinId,
      )
      return {
        ...state,
        myCoins: [...filteredCoins, action.payload],
        isLoading: false,
        error: false,
      }
    default:
      return state
  }
}

export default portfolioReducer

// selectors
