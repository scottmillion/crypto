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
  dataLabels: [],
  timeInterval: 30,
  latestPrice: null,
  latestVolume: null,
  priceDataPoints: [],
  volumeDataPoints: [],
  isCoinsDataLoading: false,
  isChartsDataLoading: false,
  coinsError: false,
  chartsError: false,
}

export const GET_COINS_DATA_ERROR = 'GET_COINS_DATA_ERROR'
export const GET_COINS_DATA_PENDING = 'GET_COINS_DATA_PENDING'
export const GET_COINS_DATA_SUCCESS = 'GET_COINS_DATA_SUCCESS'
export const GET_CHARTS_DATA_ERROR = 'GET_CHARTS_DATA_ERROR'
export const GET_CHARTS_DATA_PENDING = 'GET_CHARTS_DATA_PENDING'
export const GET_CHARTS_DATA_SUCCESS = 'GET_CHARTS_DATA_SUCCESS'
export const SET_TIME_INTERVAL = 'SET_TIME_INTERVAL'
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
    case GET_CHARTS_DATA_ERROR:
      return {
        ...state,
        chartsError: true,
        isChartsDataLoading: false,
      }
    case GET_CHARTS_DATA_PENDING:
      return {
        ...state,
        isChartsDataLoading: true,
        dataLabels: [],
        priceDataPoints: [],
        volumeDataPoints: [],
      }
    case GET_CHARTS_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isChartsDataLoading: false,
        chartsError: false,
      }
    case SET_TIME_INTERVAL:
      return {
        ...state,
        ...action.payload,
      }
    case SORT_BY:
      const { sortBy, sortByAsc } = action.payload
      const configProperty = Object.entries(state.config).find(
        (ele) => ele[1].sortBy === sortBy,
      )[0]

      return {
        ...state,
        coinsData: state.coinsData.sort((a, b) =>
          sortByAsc
            ? a[sortBy] < b[sortBy]
              ? -1
              : 1
            : b[sortBy] < a[sortBy]
            ? -1
            : 1,
        ),
        config: {
          ...state.config,
          [configProperty]: {
            ...state.config[configProperty],
            sortByAsc,
          },
        },
      }

    default:
      return state
  }
}

export default allCoinsReducer
