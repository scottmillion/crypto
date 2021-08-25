import { Arrow, Cell } from 'components'
import { getArrow } from 'utils'

const ColumnTwentyFourHourChange = (props) => (
  <Cell number={props.twentyFourHourChange} width={props.width}>
    {(props.currency !== props.symbol && (
      <>
        <Arrow content={getArrow(props.twentyFourHourChange)} />
        {Math.abs(props.twentyFourHourChange.toFixed(2))}%
      </>
    )) || <span>-</span>}
  </Cell>
)

export default ColumnTwentyFourHourChange
