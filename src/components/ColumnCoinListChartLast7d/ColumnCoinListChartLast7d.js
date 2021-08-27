import { Cell, CoinListChart } from 'components'

const ColumnCoinListChartLast7d = (props) => (
  <Cell width={props.width}>
    <CoinListChart
      prices={props.sevenDayPriceList.price.filter(
        (_, index) => index % 8 === 0,
      )}
      sevenDayChange={props.sevenDayChange}
    />
  </Cell>
)

export default ColumnCoinListChartLast7d
