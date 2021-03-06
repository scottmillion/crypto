import axios from 'axios'
import {
  GET_COINS_DATA_ERROR,
  GET_COINS_DATA_PENDING,
  GET_COINS_DATA_SUCCESS,
  GET_CHARTS_DATA_ERROR,
  GET_CHARTS_DATA_PENDING,
  GET_CHARTS_DATA_SUCCESS,
  SET_ORDER_BY,
  SET_ORDER_DIR,
  SET_PAGE,
  SET_PER_PAGE,
  SET_TIME_INTERVAL,
  SORT_BY,
} from './index'

export const getCoinsData = (queryOrder) => async (dispatch, getState) => {
  const state = getState()
  const currency = state.config.currency
  const { page, perPage, orderBy, orderDir } = state.allCoins.apiParams

  try {
    dispatch({ type: GET_COINS_DATA_PENDING })
    const { data } = await axios(
      `
      https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}_${orderDir}&per_page=${perPage}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d
      `,
    )
    dispatch({
      type: GET_COINS_DATA_SUCCESS,
      payload: data,
    })

    if ('sortBy' in queryOrder && 'sortByAsc' in queryOrder) {
      let { sortBy, sortByAsc } = queryOrder

      dispatch({
        type: SORT_BY,
        payload: { sortBy, sortByAsc },
      })
    }
  } catch (err) {
    dispatch({ type: GET_COINS_DATA_ERROR, payload: err })
  }
}

export const getChartsData = () => async (dispatch, getState) => {
  const state = getState()
  const { currency } = state.config
  const { timeInterval } = state.allCoins

  try {
    dispatch({ type: GET_CHARTS_DATA_PENDING })
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${timeInterval}&interval=daily`,
    )

    const prices = data.prices
    const latestPrice = prices[prices.length - 1][1]
    const priceDataPoints = prices.map((price) => price[1])
    const volumes = data.total_volumes
    const latestVolume = volumes[volumes.length - 1][1]
    const volumeDataPoints = volumes.map((volume) => volume[1])

    // handles data returning today twice (possibly today and current) and sometimes not
    if (prices.length === timeInterval + 1) {
      prices.pop()
      volumes.pop()
    }

    const dataLabels = prices.map((price) => {
      const date = new Date(price[0])
      let day = date.getDate().toString()
      let month = (date.getMonth() + 1).toString()

      if (day.length === 1) {
        day = '0' + day
      }

      if (month.length === 1) {
        month = '0' + month
      }

      return `${month}-${day}-${date.getFullYear()}`
    })

    dispatch({
      type: GET_CHARTS_DATA_SUCCESS,
      payload: {
        dataLabels,
        latestPrice,
        latestVolume,
        priceDataPoints,
        volumeDataPoints,
      },
    })
  } catch (err) {
    dispatch({ type: GET_CHARTS_DATA_ERROR, payload: err })
  }
}

export const incrementPageBy = (interval) => ({
  type: SET_PAGE,
  payload: interval,
})

export const setPerPage = (value) => ({
  type: SET_PER_PAGE,
  payload: value,
})

export const setTimeInterval = (interval) => ({
  type: SET_TIME_INTERVAL,
  payload: { timeInterval: interval },
})

export const toggleOrderBy = () => ({
  type: SET_ORDER_BY,
})

export const toggleOrderDir = () => ({
  type: SET_ORDER_DIR,
})

export const sortBy = (sortBy, sortByAsc) => (dispatch) => {
  dispatch({
    type: SORT_BY,
    payload: { sortBy, sortByAsc },
  })
}
