import { Cell } from 'components'
import { getArrow } from 'utils'
import { useSelector } from 'react-redux'

const ColumnSevenDayChange = (props) => {
  const { currency } = useSelector((state) => state.config)

  return (
    <Cell number={props.sevenDayChange}>
      {(currency !== props.symbol && (
        <>
          {getArrow(props.sevenDayChange)}
          {Math.abs(props.sevenDayChange.toFixed(2))}%
        </>
      )) || <span>-</span>}
    </Cell>
  )
}

export default ColumnSevenDayChange
