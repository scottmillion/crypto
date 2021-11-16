import { formatCurrency } from '@coingecko/cryptoformat'

import { convertLargeNumber, numberShortener } from 'utils'
import { useSelector } from 'react-redux'

const ColumnCurrentPrice = (props) => {
  const { currency } = useSelector((state) => state.config)
  if (!props.price || props.price < 0) {
    return '-'
  }
  if (props.price >= 10000000) {
    return <>{numberShortener(formatCurrency(props.price, currency, 'en'))}</>
  }
  return <>{convertLargeNumber(formatCurrency(props.price, currency, 'en'))}</>
}

export default ColumnCurrentPrice
