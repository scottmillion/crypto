import { Cell } from 'components'
import { getArrow } from 'utils'
import { useSelector } from 'react-redux'

const ColumnTwentyFourHourChange = (props) => {
  const { currency } = useSelector((state) => state.config)
  if (!props.twentyFourHourChange) {
    return '-'
  }

  let twentyFourHourChangeAdjusted = Math.abs(
    props.twentyFourHourChange.toFixed(2),
  )
  if (
    twentyFourHourChangeAdjusted >= 1000 ||
    twentyFourHourChangeAdjusted <= -1000
  ) {
    twentyFourHourChangeAdjusted = '1000+'
  }
  return (
    <Cell number={props.twentyFourHourChange || '-'}>
      {(currency !== props.symbol && (
        <>
          {getArrow(props.twentyFourHourChange || '-')}
          {twentyFourHourChangeAdjusted}%
        </>
      )) || <span>-</span>}
    </Cell>
  )
}

export default ColumnTwentyFourHourChange
