import { Arrow } from 'components/Arrow'
import { Cell } from 'components/Cell'
import { Column } from 'components/Column'
import { getArrow } from 'utils/getArrow'

export const ColumnHourChange = (props) => (
  <Column>
    <Cell isLabel={true} weight={700} size={16}>
      1h%
    </Cell>
    {props.columnHourChange.map((obj, index) => {
      return (
        <Cell
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
