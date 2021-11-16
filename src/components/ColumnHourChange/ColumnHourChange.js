import { Cell } from 'components'
import { getArrow } from 'utils'
import { useSelector } from 'react-redux'

const ColumnHourChange = (props) => {
  const { currency } = useSelector((state) => state.config)

  if (!props.hourChange) {
    return '-'
  }

  let hourChangeAdjusted = Math.abs(props.hourChange.toFixed(2))
  if (hourChangeAdjusted >= 1000 || hourChangeAdjusted <= -1000) {
    hourChangeAdjusted = '1000+'
  }
  return (
    <Cell number={props.hourChange}>
      {(currency !== props.symbol && (
        <>
          {getArrow(props.hourChange)}
          {hourChangeAdjusted}%
        </>
      )) || <span>-</span>}
    </Cell>
  )
}

export default ColumnHourChange
