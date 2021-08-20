import { Arrow } from 'components/Arrow'
import { getArrow } from 'utils/getArrow'

export const RowHourChange = (props) =>
  (props.currency !== props.symbol && (
    <>
      <Arrow content={getArrow(props.hourChange)} />
      {Math.abs(props.hourChange.toFixed(2))}%
    </>
  )) || <span>-</span>
