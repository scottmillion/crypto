import { Cell } from 'components'
import { getArrow } from 'utils'
import { useSelector } from 'react-redux'

const ColumnHourChange = (props) => {
  const { currency } = useSelector((state) => state.config)
  const hourChange = props.hourChange || 0 // sometimes api returns null
  return (
    <Cell number={hourChange}>
      {(currency !== props.symbol && (
        <>
          {getArrow(hourChange)}
          {Math.abs(hourChange.toFixed(2))}%
        </>
      )) || <span>-</span>}
    </Cell>
  )
}

export default ColumnHourChange
