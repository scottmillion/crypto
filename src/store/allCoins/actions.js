import axios from 'axios'
import {
  GET_COINS_DATA_ERROR,
  GET_COINS_DATA_PENDING,
  GET_COINS_DATA_SUCCESS,
  GET_CHARTS_DATA_ERROR,
  GET_CHARTS_DATA_PENDING,
  GET_CHARTS_DATA_SUCCESS,
  SET_TIME_INTERVAL,
  SORT_BY,
} from './index'

export const getCoinsData = () => async (dispatch, getState) => {
  const state = getState()
  const currency = state.config.currency

  try {
    dispatch({ type: GET_COINS_DATA_PENDING })
    const { data } = await axios(
      `
      https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d
      `,
    )
    dispatch({
      type: GET_COINS_DATA_SUCCESS,
      payload: data,
    })
  } catch (err) {
    dispatch({ type: GET_COINS_DATA_ERROR, payload: err })
  }
}

export const getChartsData = () => async (dispatch, getState) => {
  const state = getState()
  const { currency } = state.config
  const { dataPointTimeInterval } = state.allCoins

  try {
    dispatch({ type: GET_CHARTS_DATA_PENDING })
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${dataPointTimeInterval}&interval=daily`,
    )
    const prices = data.prices.slice(0, -1)
    const priceDataPoints = prices.map((price) => price[1])
    const volumes = data.total_volumes.slice(0, -1)
    const volumeDataPoints = volumes.map((volume) => volume[1])
    const dataLabels = prices.map((price) => {
      const date = new Date(price[0])
      let day = date.getDate().toString()
      if (day.length === 1) {
        day = '0' + day
      }
      return `${day}-${date.getMonth() + 1}-${date.getFullYear()}`
    })
    dispatch({
      type: GET_CHARTS_DATA_SUCCESS,
      payload: { dataLabels, priceDataPoints, volumeDataPoints },
    })
  } catch (err) {
    dispatch({ type: GET_CHARTS_DATA_ERROR, payload: err })
  }
}

export const setTimeInterval = (interval) => ({
  type: SET_TIME_INTERVAL,
  payload: interval,
})

export const sortBy = (value) => (dispatch) => {
  dispatch({
    type: SORT_BY,
    payload: value,
  })
}
