import { Cell, CoinListChart, Column } from 'components'
import { keyGen } from 'utils'

const ColumnCoinListChartLast7d = (props) => (
  <Column>
    <Cell isLabel={true} weight={700} size={16}>
      Last 7d
    </Cell>
    {props.columnCoinListChartLast7d.map((obj, index) => {
      return (
        <Cell
          key={keyGen()}
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

export default ColumnCoinListChartLast7d
