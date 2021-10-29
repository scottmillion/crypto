const initialState = {
  config: {
    num: {
      sortBy: false,
      order: 0,
      key: '#',
    },
    name: {
      sortBy: 'id',
      sortByAsc: false,
      order: 1,
      key: 'Name',
    },
    price: {
      sortBy: 'current_price',
      sortByAsc: false,
      order: 2,
      key: 'Price',
    },
    '1h': {
      sortBy: 'price_change_percentage_1h_in_currency',
      sortByAsc: false,
      order: 3,
      key: '1h',
    },
    '24h': {
      sortBy: 'price_change_percentage_24h_in_currency',
      sortByAsc: false,
      order: 4,
      key: '24h',
    },
    '7d': {
      sortBy: 'price_change_percentage_7d_in_currency',
      sortByAsc: false,
      order: 5,
      key: '7d',
    },
    '24hVolumeMarketCap': {
      sortBy: false,
      order: 6,
      key: '24h Vol / Market Cap',
    },
    circulatingTotalSupply: {
      sortBy: false,
      order: 7,
      key: 'Circulating / Total Sup',
    },
    last7d: {
      sortBy: false,
      order: 8,
      key: 'Last 7d',
    },
  },
  coinsData: [],
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
      const configProperty = Object.entries(state.config).find(
        (ele) => ele[1].sortBy === action.payload,
      )[0]
      const { payload } = action

      return {
        ...state,
        coinsData: state.coinsData.sort((a, b) =>
          state.config[configProperty].sortByAsc
            ? a[payload] < b[payload]
              ? -1
              : 1
            : b[payload] < a[payload]
            ? -1
            : 1,
        ),
        config: {
          ...state.config,
          [configProperty]: {
            ...state.config[configProperty],
            sortByAsc: !state.config[configProperty].sortByAsc,
          },
        },
      }

    default:
      return state
  }
}

export default allCoinsReducer
