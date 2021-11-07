import { formatCurrency } from '@coingecko/cryptoformat'

import { convertLargeNumber } from 'utils'
import { useSelector } from 'react-redux'

const ColumnCurrentPrice = (props) => {
  const { currency } = useSelector((state) => state.config)
  if (!props.price) {
    return '-'
  }
  return (
    <>
      {convertLargeNumber(formatCurrency(props.price, currency, 'en')).slice(
        0,
        10,
      )}
    </>
  )
}

export default ColumnCurrentPrice
