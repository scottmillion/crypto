import { CoinListChart } from 'components'
import styled from 'styled-components'

const Container = styled.div`
  width: 120px;
`

const ColumnCoinListChartLast7d = (props) => (
  <Container>
    <CoinListChart
      prices={props.sevenDayPriceList.price.filter(
        (_, index) => index % 8 === 0,
      )}
      sevenDayChange={props.sevenDayChange}
    />
  </Container>
)

export default ColumnCoinListChartLast7d
