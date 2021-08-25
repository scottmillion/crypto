import { Arrow, Cell } from 'components'
import { getArrow } from 'utils'

const ColumnHourChange = (props) => (
  <Cell number={props.hourChange} width={props.width}>
    {(props.currency !== props.symbol && (
      <>
        <Arrow content={getArrow(props.hourChange)} />
        {Math.abs(props.hourChange.toFixed(2))}%
      </>
    )) || <span>-</span>}
  </Cell>
)

export default ColumnHourChange
