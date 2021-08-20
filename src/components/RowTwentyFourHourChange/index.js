import { Arrow } from 'components/Arrow'
import { getArrow } from 'utils/getArrow'

export const RowTwentyFourHourChange = (props) =>
  (props.currency !== props.symbol && (
    <>
      <Arrow content={getArrow(props.twentyFourHourChange)} />
      {Math.abs(props.twentyFourHourChange.toFixed(2))}%
    </>
  )) || <span>-</span>
