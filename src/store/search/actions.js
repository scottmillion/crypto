import axios from 'axios'
import {
  GET_SEARCH_DATA_ERROR,
  GET_SEARCH_DATA_PENDING,
  GET_SEARCH_DATA_SUCCESS,
} from './index'

export const getSearchData = (value) => async (dispatch) => {
  try {
    dispatch({ type: GET_SEARCH_DATA_PENDING })
    const { data } = await axios(
      `https://crypto-app-server.herokuapp.com/coins/${value}`,
    )
    dispatch({
      type: GET_SEARCH_DATA_SUCCESS,
      payload: data,
    })
  } catch (err) {
    dispatch({ type: GET_SEARCH_DATA_ERROR, payload: err })
  }
}
