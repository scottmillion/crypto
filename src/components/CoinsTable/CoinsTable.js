import React from 'react'
import { getColumnData } from 'utils'
import {
  ColumnCirculatingTotalSupply,
  ColumnCoinListChartLast7d,
  ColumnCurrentPrice,
  ColumnHourChange,
  ColumnName,
  ColumnNumber,
  ColumnSevenDayChange,
  ColumnTwentyFourHourChange,
  ColumnVolumeMarketCap,
} from 'components'
import styled from 'styled-components'

const Table = styled.div`
  padding: ${(props) => (props.isLabel ? 0 : 8)}px 18px 0px 18px;
  margin-top: ${(props) => (props.isLabel ? 0 : 8)};
  display: flex;
  justify-content: space-between;
`
class CoinsTable extends React.Component {
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
          />
        </Table>
      )
    )
  }
}

export default CoinsTable
