import { Cell } from 'components'
import { getArrow } from 'utils'
import { useSelector } from 'react-redux'

const ColumnTwentyFourHourChange = (props) => {
  const { currency } = useSelector((state) => state.config)
  return (
    <Cell number={props.twentyFourHourChange}>
      {(currency !== props.symbol && (
        <>
          {getArrow(props.twentyFourHourChange)}
          {Math.abs(props.twentyFourHourChange.toFixed(2))}%
        </>
      )) || <span>-</span>}
    </Cell>
  )
}

export default ColumnTwentyFourHourChange
