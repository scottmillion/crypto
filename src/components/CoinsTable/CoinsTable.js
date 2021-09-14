import React from 'react'
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
  LoadingBox,
} from 'components'
import { coinListPercentDisplayColors as colors, keyGen } from 'utils'

import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCellUI from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRowUI from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { Filter } from '@styled-icons/boxicons-regular/Filter'
import { sortBy } from 'store/allCoins/actions.js'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const CoinsTable = (props) => {
  const { data, isLoading } = props
  const themeContext = useContext(ThemeContext)

  const dispatch = useDispatch()

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  })

  const TableCell = withStyles(() => ({
    head: {
      backgroundColor: themeContext.secondary,
      color: themeContext.mainFont,
      fontSize: 12,
      border: 'none',
    },
    body: {
      backgroundColor: themeContext.secondary,
      color: themeContext.mainFont,
      fontSize: 12,
      border: 'none',
    },
  }))(TableCellUI)

  const TableRow = withStyles(() => ({
    root: {
      borderTop: `1px solid ${themeContext.hrLineTop}`,
    },
  }))(TableRowUI)

  const HeaderRow = withStyles(() => ({
    root: {
      borderTop: `none`,
    },
  }))(TableRow)

  const StyledFilter = styled(Filter)`
    width: 20px;
    margin-left: 1px;
  `

  const rows = data.map((coin, index) => {
    const {
      circulating_supply,
      current_price,
      image,
      market_cap,
      name,
      symbol,
      total_supply,
      total_volume,
      price_change_percentage_1h_in_currency: hourChange,
      price_change_percentage_24h_in_currency: twentyFourHourChange,
      price_change_percentage_7d_in_currency: sevenDayChange,
      sparkline_in_7d: sevenDayPriceList,
    } = coin
    const dataset = {}
    dataset.number = <ColumnNumber number={index + 1} />
    dataset.name = <ColumnName image={image} name={name} symbol={symbol} />
    dataset.price = <ColumnCurrentPrice price={current_price} />
    dataset.priceNumeric = current_price
    dataset.hour = (
      <ColumnHourChange
        currentPrice={current_price}
        hourChange={hourChange}
        symbol={symbol}
      />
    )
    dataset.hourNumeric = hourChange
    dataset.hour24 = (
      <ColumnTwentyFourHourChange
        symbol={symbol}
        twentyFourHourChange={twentyFourHourChange}
      />
    )
    dataset.hour24Numeric = twentyFourHourChange
    dataset.days7 = (
      <ColumnSevenDayChange sevenDayChange={sevenDayChange} symbol={symbol} />
    )
    dataset.days7Numeric = sevenDayChange
    dataset.volumeMarketCap = (
      <ColumnVolumeMarketCap
        color1={colors[index][0]}
        color2={colors[index][1]}
        marketCap={market_cap}
        totalVolume={total_volume}
      />
    )
    dataset.vmcNumeric = total_volume / market_cap
    dataset.circulatingTotalSupply = (
      <ColumnCirculatingTotalSupply
        color1={colors[index][0]}
        color2={colors[index][1]}
        circulatingSupply={circulating_supply}
        totalSupply={total_supply}
      />
    )
    dataset.ctsNumeric = circulating_supply / (total_supply || Infinity)
    dataset.last7d = (
      <ColumnCoinListChartLast7d
        sevenDayChange={sevenDayChange}
        sevenDayPriceList={sevenDayPriceList}
      />
    )
    return dataset
  })

  const classes = useStyles()

  return (
    <>
      {(!isLoading && data && (
        <TableContainer component={Paper} elevation={0} square={true}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <HeaderRow>
                <TableCell>#</TableCell>
                <TableCell>
                  Name
                  <StyledFilter onClick={() => dispatch(sortBy('id'))} />
                </TableCell>

                <TableCell>
                  Price
                  <StyledFilter
                    onClick={() => dispatch(sortBy('current_price'))}
                  />
                </TableCell>
                <TableCell>
                  1h
                  <StyledFilter
                    onClick={() =>
                      dispatch(sortBy('price_change_percentage_1h_in_currency'))
                    }
                  />
                </TableCell>
                <TableCell>
                  24h
                  <StyledFilter
                    onClick={() =>
                      dispatch(
                        sortBy('price_change_percentage_24h_in_currency'),
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  7d
                  <StyledFilter
                    onClick={() =>
                      dispatch(sortBy('price_change_percentage_7d_in_currency'))
                    }
                  />
                </TableCell>
                <TableCell>24h Volume / Market Cap</TableCell>
                <TableCell>Circulating / TotalSupply</TableCell>
                <TableCell>Last 7d</TableCell>
              </HeaderRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <TableRow key={keyGen()}>
                  <TableCell component="th" scope="row">
                    {row.number}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.hour}</TableCell>
                  <TableCell>{row.hour24}</TableCell>
                  <TableCell>{row.days7}</TableCell>
                  <TableCell>{row.volumeMarketCap}</TableCell>
                  <TableCell>{row.circulatingTotalSupply}</TableCell>
                  <TableCell>{row.last7d}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )) || <LoadingBox height={250} />}
    </>
  )
}

export default CoinsTable
