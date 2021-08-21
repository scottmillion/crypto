import { Arrow } from 'components/Arrow'
import { Cell } from 'components/Cell'
import { Column } from 'components/Column'
import { getArrow } from 'utils/getArrow'
import { keyGen } from 'utils/keyGen'

export const ColumnTwentyFourHourChange = (props) => (
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
