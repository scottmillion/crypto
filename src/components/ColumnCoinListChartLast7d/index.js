import { Column } from 'components/Column'
import { Cell } from 'components/Cell'
import CoinListChart from 'components/CoinListChart'

export const ColumnCoinListChartLast7d = (props) => (
  <Column>
    <Cell isLabel={true} weight={700} size={16}>
      Last 7d
    </Cell>
    {props.columnCoinListChartLast7d.map((obj, index) => {
      return (
        <Cell
          width="120"
          hrWidth={120}
          turnHrOff={index === props.columnCoinListChartLast7d.length - 1}
        >
          <CoinListChart
            prices={obj.sevenDayPriceList.price.filter(
              (_, index) => index % 8 === 0,
            )}
            sevenDayChange={obj.sevenDayChange}
            theme={props.theme}
          />
        </Cell>
      )
    })}
  </Column>
)
