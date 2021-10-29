import axios from 'axios'
import {
  GET_COIN_DATA_ERROR,
  GET_COIN_DATA_PENDING,
  GET_COIN_DATA_SUCCESS,
} from './index'

export const getCoinData = (coinId) => async (dispatch) => {
  try {
    dispatch({ type: GET_COIN_DATA_PENDING })
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`,
    )
    dispatch({
      type: GET_COIN_DATA_SUCCESS,
      payload: data,
    })
  } catch (err) {
    console.log(err)
    dispatch({ type: GET_COIN_DATA_ERROR, payload: err })
  }
}
