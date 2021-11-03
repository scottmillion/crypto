import { CoinListChart } from 'components'
import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
  width: 120px;
`

const ColumnCoinListChartLast7d = React.memo((props) => {
  return (
    <Container>
      <CoinListChart
        prices={props.sevenDayPriceList.price.filter(
          (_, index) => index % 8 === 0,
        )}
        sevenDayChange={props.sevenDayChange}
      />
    </Container>
  )
})

export default ColumnCoinListChartLast7d
