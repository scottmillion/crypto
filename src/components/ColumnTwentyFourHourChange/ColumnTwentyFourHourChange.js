import { Arrow, Cell, Column } from 'components'
import { getArrow, keyGen } from 'utils'

const ColumnTwentyFourHourChange = (props) => (
  <Column>
    <Cell isLabel={true} weight={700} size={16}>
      24h%
    </Cell>
    {props.columnTwentyFourHourChange.map((obj, index) => {
      return (
        <Cell
          key={keyGen()}
          number={obj.twentyFourHourChange}
          turnHrOff={index === props.columnTwentyFourHourChange.length - 1}
        >
          {(props.currency !== obj.symbol && (
            <>
              <Arrow content={getArrow(obj.twentyFourHourChange)} />
              {Math.abs(obj.twentyFourHourChange.toFixed(2))}%
            </>
          )) || <span>-</span>}
        </Cell>
      )
    })}
  </Column>
)

export default ColumnTwentyFourHourChange
