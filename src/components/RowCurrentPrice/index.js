import { convertLargeNumber } from 'utils/convertLargeNumber'
import { formatCurrency } from '@coingecko/cryptoformat'

export const RowCurrentPrice = (props) =>
  convertLargeNumber(formatCurrency(props.currentPrice, props.currency, 'en'))
