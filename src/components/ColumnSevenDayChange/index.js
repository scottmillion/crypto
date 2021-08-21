import { Arrow } from 'components/Arrow'
import { Cell } from 'components/Cell'
import { Column } from 'components/Column'
import { getArrow } from 'utils/getArrow'

export const ColumnSevenDayChange = (props) => (
  <Column>
    <Cell isLabel={true} weight={700} size={16}>
      7d%
    </Cell>
    {props.columnSevenDayChange.map((obj, index) => {
      return (
        <Cell
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
