import { Arrow, Cell, Column } from 'components'
import { getArrow, keyGen } from 'utils'

const ColumnHourChange = (props) => (
  <Column>
    <Cell isLabel={true} weight={700} size={16}>
      1h%
    </Cell>
    {props.columnHourChange.map((obj, index) => {
      return (
        <Cell
          key={keyGen()}
          number={obj.hourChange}
          turnHrOff={index === props.columnHourChange.length - 1}
        >
          {(props.currency !== obj.symbol && (
            <>
              <Arrow content={getArrow(obj.hourChange)} />
              {Math.abs(obj.hourChange.toFixed(2))}%
            </>
          )) || <span>-</span>}
        </Cell>
      )
    })}
  </Column>
)

export default ColumnHourChange
