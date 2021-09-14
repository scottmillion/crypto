import { formatCurrency } from '@coingecko/cryptoformat'

import { convertLargeNumber } from 'utils'
import { useSelector } from 'react-redux'

const ColumnCurrentPrice = (props) => {
  const { currency } = useSelector((state) => state.config)
  return <>{convertLargeNumber(formatCurrency(props.price, currency, 'en'))}</>
}

export default ColumnCurrentPrice
