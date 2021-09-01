const initialState = {
  coinsData: [],
  hourSortAsc: false,
  idSortAsc: true,
  priceSortAsc: false,
  sevenDaySortAsc: false,
  twentyFourHourSortAsc: false,
  priceDataLabels: [],
  priceDataPoints: [],
  volumeDataLabels: [],
  volumeDataPoints: [],
  isCoinsDataLoading: false,
  isPriceDataLoading: false,
  isVolumeDataLoading: false,
  coinsError: false,
  priceError: false,
  volumeError: false,
}

export const GET_COINS_DATA_ERROR = 'GET_COINS_DATA_ERROR'
export const GET_COINS_DATA_PENDING = 'GET_COINS_DATA_PENDING'
export const GET_COINS_DATA_SUCCESS = 'GET_COINS_DATA_SUCCESS'
export const GET_PRICE_DATA_ERROR = 'GET_PRICE_DATA_ERROR'
export const GET_PRICE_DATA_PENDING = 'GET_PRICE_DATA_PENDING'
export const GET_PRICE_DATA_SUCCESS = 'GET_PRICE_DATA_SUCCESS'
export const GET_VOLUME_DATA_ERROR = 'GET_VOLUME_DATA_ERROR'
export const GET_VOLUME_DATA_PENDING = 'GET_VOLUME_DATA_PENDING'
export const GET_VOLUME_DATA_SUCCESS = 'GET_VOLUME_DATA_SUCCESS'
export const SORT_BY = 'SORT_BY'

function allCoinsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COINS_DATA_ERROR:
      return {
        ...state,
        coinsError: true,
        isCoinsDataLoading: false,
      }
    case GET_COINS_DATA_PENDING:
      return {
        ...state,
        isCoinsDataLoading: true,
      }
    case GET_COINS_DATA_SUCCESS:
      return {
        ...state,
        coinsData: action.payload,
        isCoinsDataLoading: false,
        coinsError: false,
      }
    case GET_PRICE_DATA_ERROR:
      return {
        ...state,
        priceError: true,
        isPriceDataLoading: false,
      }
    case GET_PRICE_DATA_PENDING:
      return {
        ...state,
        isPriceDataLoading: true,
      }
    case GET_PRICE_DATA_SUCCESS:
      return {
        ...state,
        priceDataLabels: action.payload.priceDataLabels,
        priceDataPoints: action.payload.priceDataPoints,
        isPriceDataLoading: false,
        priceError: false,
      }
    case GET_VOLUME_DATA_ERROR:
      return {
        ...state,
        volumeError: true,
        isVolumeDataLoading: false,
      }
    case GET_VOLUME_DATA_PENDING:
      return {
        ...state,
        isVolumeDataLoading: true,
      }
    case GET_VOLUME_DATA_SUCCESS:
      return {
        ...state,
        volumeDataLabels: action.payload.volumeDataLabels,
        volumeDataPoints: action.payload.volumeDataPoints,
        isVolumeDataLoading: false,
        volumeError: false,
      }
    case SORT_BY:
      let sortAsc
      switch (action.payload) {
        case 'id':
          sortAsc = 'idSortAsc'
          break
        case 'current_price':
          sortAsc = 'priceSortAsc'
          break
        case 'price_change_percentage_1h_in_currency':
          sortAsc = 'hourSortAsc'
          break
        case 'price_change_percentage_7d_in_currency':
          sortAsc = 'sevenDaySortAsc'
          break
        case 'price_change_percentage_24h_in_currency':
          sortAsc = 'twentyFourHourSortAsc'
          break
        default:
          sortAsc = 'name'
      }

      return {
        ...state,
        coinsData: state.coinsData.sort((a, b) =>
          state[sortAsc]
            ? a[action.payload] < b[action.payload]
              ? -1
              : 1
            : b[action.payload] < a[action.payload]
            ? -1
            : 1,
        ),
        [sortAsc]: !state[sortAsc],
      }

    default:
      return state
  }
}

export default allCoinsReducer
