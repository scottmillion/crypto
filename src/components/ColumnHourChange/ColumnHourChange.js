import { Cell } from 'components'
import { getArrow } from 'utils'

const ColumnHourChange = (props) => (
  <Cell number={props.hourChange} width={props.width}>
    {(props.currency !== props.symbol && (
      <>
        {getArrow(props.hourChange)}
        {Math.abs(props.hourChange.toFixed(2))}%
      </>
    )) || <span>-</span>}
  </Cell>
)

export default ColumnHourChange
