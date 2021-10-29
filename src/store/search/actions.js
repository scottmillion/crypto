import axios from 'axios'
import {
  GET_SEARCH_DATA_ERROR,
  GET_SEARCH_DATA_PENDING,
  GET_SEARCH_DATA_SUCCESS,
  CLEAR_DATA,
} from './index'

export const getSearchData = (value, dataName) => async (
  dispatch,
  getState,
) => {
  const oldData = getState().search[dataName]
  try {
    dispatch({ type: GET_SEARCH_DATA_PENDING, payload: dataName })
    const { data } = await axios(
      `https://crypto-app-server.herokuapp.com/coins/${value}`,
    )
    dispatch({
      type: GET_SEARCH_DATA_SUCCESS,
      payload: { data, dataName },
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: GET_SEARCH_DATA_ERROR,
      payload: { data: oldData, dataName, err },
    })
  }
}

export const clearData = (dataName) => ({
  type: CLEAR_DATA,
  payload: dataName,
})
