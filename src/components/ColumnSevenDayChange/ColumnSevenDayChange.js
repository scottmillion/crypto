import { Arrow, Cell, Column } from 'components'
import { getArrow, keyGen } from 'utils'

const ColumnSevenDayChange = (props) => (
  <Column>
    <Cell isLabel={true} weight={700} size={16}>
      7d%
    </Cell>
    {props.columnSevenDayChange.map((obj, index) => {
      return (
        <Cell
          key={keyGen()}
          number={obj.sevenDayChange}
          turnHrOff={index === props.columnSevenDayChange.length - 1}
        >
          {(props.currency !== obj.symbol && (
            <>
              <Arrow content={getArrow(obj.sevenDayChange)} />
              {Math.abs(obj.sevenDayChange.toFixed(2))}%
            </>
          )) || <span>-</span>}
        </Cell>
      )
    })}
  </Column>
)

export default ColumnSevenDayChange
