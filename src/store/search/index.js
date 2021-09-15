const initialState = {
  data: [],
  error: false,
  isLoading: false,
}

export const GET_SEARCH_DATA_ERROR = 'GET_SEARCH_DATA_ERROR'
export const GET_SEARCH_DATA_PENDING = 'GET_SEARCH_DATA_PENDING'
export const GET_SEARCH_DATA_SUCCESS = 'GET_SEARCH_DATA_SUCCESS'
export const CLEAR_DATA = 'CLEAR_DATA'

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_DATA_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      }
    case GET_SEARCH_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case GET_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false,
      }
    case CLEAR_DATA:
      return {
        ...state,
        data: [],
        isLoading: false,
        error: false,
      }

    default:
      return state
  }
}

export default searchReducer
