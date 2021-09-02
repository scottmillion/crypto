import axios from 'axios'
import {
  GET_COINS_DATA_ERROR,
  GET_COINS_DATA_PENDING,
  GET_COINS_DATA_SUCCESS,
  GET_PRICE_DATA_ERROR,
  GET_PRICE_DATA_PENDING,
  GET_PRICE_DATA_SUCCESS,
  GET_VOLUME_DATA_ERROR,
  GET_VOLUME_DATA_PENDING,
  GET_VOLUME_DATA_SUCCESS,
  SORT_BY,
} from './index'

export const getCoinsData = () => async (dispatch, getState) => {
  const state = getState()
  const currency = state.config.currency

  try {
    dispatch({ type: GET_COINS_DATA_PENDING })
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=bitcoin%2C%20ethereum%2C%20tether%2C%20dogecoin%2C%20binancecoin%2C%20cardano%2C%20usd-coin%2C%20wrapped-bitcoin%2C%20litecoin&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`,
    )
    dispatch({
      type: GET_COINS_DATA_SUCCESS,
      payload: data,
    })
  } catch (err) {
    dispatch({ type: GET_COINS_DATA_ERROR, payload: err })
  }
}

export const getPrices = () => async (dispatch, getState) => {
  const state = getState()
  const currency = state.config.currency

  try {
    dispatch({ type: GET_PRICE_DATA_PENDING })
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=40&interval=daily`,
    )
    const prices = data.prices.slice(0, 40)
    const priceDataPoints = prices.map((price) => price[1])
    const priceDataLabels = prices.map((price) =>
      new Date(price[0]).getDate().toString(),
    )
    dispatch({
      type: GET_PRICE_DATA_SUCCESS,
      payload: { priceDataLabels, priceDataPoints },
    })
  } catch (err) {
    dispatch({ type: GET_PRICE_DATA_ERROR, payload: err })
  }
}

export const getVolumes = () => async (dispatch, getState) => {
  const state = getState()
  const currency = state.config.currency

  try {
    dispatch({ type: GET_VOLUME_DATA_PENDING })
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=23&interval=daily`,
    )
    const volumes = data.total_volumes.slice(0, 23)
    const volumeDataPoints = volumes.map((volume) => volume[1])
    const volumeDataLabels = volumes.map((volume) =>
      new Date(volume[0]).getDate().toString(),
    )
    dispatch({
      type: GET_VOLUME_DATA_SUCCESS,
      payload: { volumeDataLabels, volumeDataPoints },
    })
  } catch (err) {
    dispatch({ type: GET_VOLUME_DATA_ERROR, payload: err })
  }
}

export const sortBy = (value) => (dispatch) => {
  dispatch({
    type: SORT_BY,
    payload: value,
  })
}
