import { Cell } from 'components'
import { getArrow } from 'utils'
import { useSelector } from 'react-redux'

const ColumnTwentyFourHourChange = (props) => {
  const { currency } = useSelector((state) => state.config)
  if (!props.twentyFourHourChange) {
    return '-'
  }
  return (
    <Cell number={props.twentyFourHourChange || '-'}>
      {(currency !== props.symbol && (
        <>
          {getArrow(props.twentyFourHourChange || '-')}
          {Math.abs(
            props.twentyFourHourChange
              ? props.twentyFourHourChange.toFixed(2)
              : '-',
          )}
          %
        </>
      )) || <span>-</span>}
    </Cell>
  )
}

export default ColumnTwentyFourHourChange
