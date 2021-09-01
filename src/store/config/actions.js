import axios from 'axios'
import {
  GET_GLOBAL_DATA_ERROR,
  GET_GLOBAL_DATA_PENDING,
  GET_GLOBAL_DATA_SUCCESS,
  CHANGE_CURRENCY,
  TOGGLE_THEME,
} from './index'

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
})

export const changeCurrency = (value) => ({
  type: CHANGE_CURRENCY,
  payload: value,
})

export const getGlobalData = () => async (dispatch) => {
  try {
    dispatch({ type: GET_GLOBAL_DATA_PENDING })
    const { data } = await axios('https://api.coingecko.com/api/v3/global')
    dispatch({
      type: GET_GLOBAL_DATA_SUCCESS,
      payload: data.data,
    })
  } catch (err) {
    dispatch({ type: GET_GLOBAL_DATA_ERROR, payload: err })
  }
}
