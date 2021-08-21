import React from 'react'
import styled from 'styled-components'
import { ColumnCirculatingTotalSupply } from 'components/ColumnCirculatingTotalSupply'
import { ColumnCoinListChartLast7d } from 'components/ColumnCoinListChartLast7d'
import { ColumnCurrentPrice } from 'components/ColumnCurrentPrice'
import { ColumnHourChange } from 'components/ColumnHourChange'
import { ColumnName } from 'components/ColumnName'
import { ColumnNumber } from 'components/ColumnNumber'
import { ColumnSevenDayChange } from 'components/ColumnSevenDayChange'
import { ColumnTwentyFourHourChange } from 'components/ColumnTwentyFourHourChange'
import { ColumnVolumeMarketCap } from 'components/ColumnVolumeMarketCap'
import { getColumnData } from 'utils/getColumnData'

const Table = styled.div`
  padding: ${(props) => (props.isLabel ? '0px' : '8px')} 18px;
  margin: ${(props) => (props.isLabel ? '0px' : '8px')} 0px;
  display: flex;
  justify-content: space-between;
`
export class CoinsTable extends React.Component {
  state = {
    columnData: null,
  }

  setColumnData = (data) => {
    const columnData = getColumnData(data)
    this.setState({ columnData })
  }

  componentDidMount() {
    this.setColumnData(this.props.data)
  }

  render() {
    const { columnData } = this.state
    return (
      columnData && (
        <Table>
          <ColumnNumber columnNumber={columnData.columnNumber} />
          <ColumnName columnName={columnData.columnName} />
          <ColumnCurrentPrice
            columnCurrentPrice={columnData.columnCurrentPrice}
            currency={this.props.currency}
          />
          <ColumnHourChange
            columnHourChange={columnData.columnHourChange}
            currency={this.props.currency}
          />
          <ColumnTwentyFourHourChange
            columnTwentyFourHourChange={columnData.columnTwentyFourHourChange}
            currency={this.props.currency}
          />
          <ColumnSevenDayChange
            columnSevenDayChange={columnData.columnSevenDayChange}
            currency={this.props.currency}
          />
          <ColumnVolumeMarketCap
            columnVolumeMarketCap={columnData.columnVolumeMarketCap}
            currency={this.props.currency}
          />
          <ColumnCirculatingTotalSupply
            columnCirculatingTotalSupply={
              columnData.columnCirculatingTotalSupply
            }
            currency={this.props.currency}
          />
          <ColumnCoinListChartLast7d
            columnCoinListChartLast7d={columnData.columnCoinListChartLast7d}
            theme={this.props.theme}
          />
        </Table>
      )
    )
  }
}
