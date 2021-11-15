import { Cell } from 'components'
import { getArrow } from 'utils'
import { useSelector } from 'react-redux'

const ColumnSevenDayChange = (props) => {
  const { currency } = useSelector((state) => state.config)
  if (!props.sevenDayChange) {
    return '-'
  }
  let sevenDayChangeAdjusted = Math.abs(props.sevenDayChange.toFixed(2))
  if (sevenDayChangeAdjusted >= 1000 || sevenDayChangeAdjusted <= -1000) {
    sevenDayChangeAdjusted = '1000+'
  }
  return (
    <>
      <Cell number={props.sevenDayChange}>
        {(currency !== props.symbol && (
          <>
            {getArrow(props.sevenDayChange)}
            {sevenDayChangeAdjusted}%
          </>
        )) || <span>-</span>}
      </Cell>
    </>
  )
}

export default ColumnSevenDayChange
