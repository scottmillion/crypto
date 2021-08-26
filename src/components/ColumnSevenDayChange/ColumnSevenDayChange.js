import { Cell } from 'components'
import { getArrow } from 'utils'

const ColumnSevenDayChange = (props) => (
  <Cell number={props.sevenDayChange} width={props.width}>
    {(props.currency !== props.symbol && (
      <>
        {getArrow(props.sevenDayChange)}
        {Math.abs(props.sevenDayChange.toFixed(2))}%
      </>
    )) || <span>-</span>}
  </Cell>
)

export default ColumnSevenDayChange
