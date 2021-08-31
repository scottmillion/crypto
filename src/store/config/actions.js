import { CHANGE_CURRENCY, TOGGLE_THEME } from './index'

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
})

export const changeCurrency = (value) => ({
  type: CHANGE_CURRENCY,
  payload: value,
})
