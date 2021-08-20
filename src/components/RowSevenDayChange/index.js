import { Arrow } from 'components/Arrow'
import { getArrow } from 'utils/getArrow'

export const RowSevenDayChange = (props) =>
  (props.currency !== props.symbol && (
    <>
      <Arrow content={getArrow(props.sevenDayChange)} />
      {Math.abs(props.sevenDayChange.toFixed(2))}%
    </>
  )) || <span>-</span>
