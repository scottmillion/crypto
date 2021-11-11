import axios from 'axios'
import {
  DELETE_COIN,
  GET_MYCOINS_DATA_ERROR,
  GET_MYCOINS_DATA_PENDING,
  GET_MYCOINS_DATA_SUCCESS,
  GET_HISTORIC_DATA_ERROR,
  GET_HISTORIC_DATA_PENDING,
  GET_HISTORIC_DATA_SUCCESS,
} from './index'

export const getCoinsData = () => async (dispatch, getState) => {
  const state = getState()
  const currency = state.config.currency
  const myCoins = state.portfolio.myCoins

  const getIds = () => {
    const coinIds = myCoins.map((coin) => {
      return coin.coinId
    })
    return coinIds.join('%2C%20')
  }

  const idList = getIds()

  // prevents populating all coins if no ids present
  if (!idList) {
    return
  }

  try {
    dispatch({ type: GET_MYCOINS_DATA_PENDING })
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${idList}&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`,
    )
    dispatch({
      type: GET_MYCOINS_DATA_SUCCESS,
      payload: data,
    })
  } catch (err) {
    dispatch({ type: GET_MYCOINS_DATA_ERROR, payload: err })
  }
}

export const addCoin = (coinId, amountOwned, purchaseDate) => async (
  dispatch,
  getState,
) => {
  const formattedDate = purchaseDate.split('-').reverse().join('-')
  try {
    dispatch({ type: GET_HISTORIC_DATA_PENDING })
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${coinId}/history?date=${formattedDate}&localization=false`,
    )
    //sometimes market_data not available
    const historicPrice = data?.market_data?.current_price || {}
    dispatch({
      type: GET_HISTORIC_DATA_SUCCESS,
      payload: {
        coinId,
        amountOwned: +amountOwned,
        purchaseDate: formattedDate,
        historicPrice,
      },
    })
  } catch (err) {
    dispatch({ type: GET_HISTORIC_DATA_ERROR, payload: err })
  }
}

export const deleteCoin = (id) => ({
  type: DELETE_COIN,
  payload: id,
})
