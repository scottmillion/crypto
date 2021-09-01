import axios from 'axios'
import {
  GET_COINS_DATA_ERROR,
  GET_COINS_DATA_PENDING,
  GET_COINS_DATA_SUCCESS,
  SET_VALUE,
  TOGGLE_SHOW_POP_UP,
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

export const setValue = (value) => ({
  type: SET_VALUE,
  payload: value,
})

export const toggleShowPopUp = () => ({
  type: TOGGLE_SHOW_POP_UP,
})
