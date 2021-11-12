import { Cell } from 'components'
import { getArrow } from 'utils'
import { useSelector } from 'react-redux'

const ColumnHourChange = (props) => {
  const { currency } = useSelector((state) => state.config)

  if (!props.hourChange) {
    return '-'
  }
  return (
    <Cell number={props.hourChange}>
      {(currency !== props.symbol && (
        <>
          {getArrow(props.hourChange)}
          {Math.abs(props.hourChange.toFixed(2))}%
        </>
      )) || <span>-</span>}
    </Cell>
  )
}

export default ColumnHourChange
