const initialState = {
  navSearch: {
    data: [],
    error: false,
    isLoading: false,
  },
  portfolioSearch: {
    data: [],
    error: false,
    isLoading: false,
  },
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
        [action.payload.dataName]: {
          ...[action.payload.dataName],
          err: true,
          isLoading: false,
        },
      }
    case GET_SEARCH_DATA_PENDING:
      return {
        ...state,
        [action.payload]: {
          ...[action.payload],
          isLoading: true,
        },
      }
    case GET_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        [action.payload.dataName]: {
          ...[action.payload.dataName],
          data: action.payload.data,
          isLoading: false,
          error: false,
        },
      }
    case CLEAR_DATA:
      return {
        ...state,
        [action.payload]: {
          ...[action.payload],
          data: [],
          isLoading: false,
          error: false,
        },
      }

    default:
      return state
  }
}

export default searchReducer
