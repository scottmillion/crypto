import React, { useContext } from 'react'
import { keyGen, displayClasses, rows } from 'utils'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCellUI from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRowUI from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Filter } from '@styled-icons/boxicons-regular/Filter'
import {
  incrementPageBy,
  setPerPage,
  toggleOrderBy,
  toggleOrderDir,
  sortBy,
} from 'store/allCoins/actions.js'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeContext } from 'styled-components'
import styled from 'styled-components'

import {
  ApiSettings,
  ApiSettingsLeft,
  ApiSettingsRight,
  DropDownArrow,
  LeftArrow,
  Order,
  RightArrow,
  SelectArrow,
  ShowInput,
  TopBottom,
} from './CoinsTable.css'

import { useHistory } from 'react-router-dom'

const StyledFilter = styled(Filter)`
  width: 20px;
  margin-left: 1px;
`

const CoinsTable = React.memo((props) => {
  const { data } = props
  const themeContext = useContext(ThemeContext)
  const dispatch = useDispatch()
  const { apiParams, config } = useSelector((state) => state.allCoins)
  const { page, perPage, orderBy, orderDir } = apiParams

  let history = useHistory()

  const useStyles = makeStyles((theme) => ({
    none: {},
    xxxs: {
      [theme.breakpoints.down('315')]: {
        display: 'none',
      },
    },
    xxs: {
      [theme.breakpoints.down('370')]: {
        display: 'none',
      },
    },
    xs: {
      [theme.breakpoints.down('500')]: {
        display: 'none',
      },
    },
    s: {
      [theme.breakpoints.down('620')]: {
        display: 'none',
      },
    },
    m: {
      [theme.breakpoints.down('768')]: {
        display: 'none',
      },
    },
    l: {
      [theme.breakpoints.down('900')]: {
        display: 'none',
      },
    },
    xl: {
      [theme.breakpoints.down('1100')]: {
        display: 'none',
      },
    },
    xxl: {
      [theme.breakpoints.down('1220')]: {
        display: 'none',
      },
    },
    root: {
      backgroundColor: 'transparent',
    },
  }))

  const onFilterColumn = (sortByText, label) => {
    const sortByAsc = !config[label].sortByAsc
    history.push(`/?sortBy=${sortByText}&sortByAsc=${sortByAsc}`)
    dispatch(sortBy(sortByText, sortByAsc))
  }

  const classes = useStyles()

  const TableCell = withStyles(() => ({
    head: {
      backgroundColor: themeContext.secondary,
      color: themeContext.mainFont,
      fontSize: 11,
      border: 'none',
      fontFamily: 'inherit',
      paddingBlock: '6px',
    },
    body: {
      backgroundColor: themeContext.secondary,
      color: themeContext.mainFont,
      fontSize: 11,
      border: 'none',
      fontFamily: 'inherit',
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

  return (
    <>
      <ApiSettings>
        <ApiSettingsLeft>
          <SelectArrow onClick={() => dispatch(toggleOrderDir())} />
          <TopBottom>
            {orderDir === 'desc' ? 'TOP' : 'BOT'} {perPage * page}
          </TopBottom>
          <Order>
            BY {orderBy.toUpperCase().split('_').join(' ')}
            <DropDownArrow onClick={() => dispatch(toggleOrderBy())} />
          </Order>
        </ApiSettingsLeft>

        <ApiSettingsRight>
          SHOW:
          <ShowInput
            value={perPage}
            onChange={(e) => dispatch(setPerPage(e.target.value))}
          >
            <option>10</option>
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </ShowInput>
          PAGE
          <LeftArrow onClick={() => dispatch(incrementPageBy(-1))} />
          {page}
          <RightArrow onClick={() => dispatch(incrementPageBy(1))} />
        </ApiSettingsRight>
      </ApiSettings>
      <TableContainer
        component={Paper}
        elevation={0}
        square={true}
        className={classes.root}
      >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <HeaderRow>
              {Object.keys(config).map((label, index) => (
                <TableCell
                  key={keyGen()}
                  className={classes[displayClasses[index]]}
                >
                  {config[label].key}
                  {config[label].sortBy && (
                    <StyledFilter
                      onClick={() =>
                        onFilterColumn(config[label].sortBy, label)
                      }
                    />
                  )}
                </TableCell>
              ))}
            </HeaderRow>
          </TableHead>

          <TableBody>
            {rows(data).map((row) => (
              <TableRow key={keyGen()}>
                <TableCell component="th" scope="row" className={classes.xxs}>
                  {row.number}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell className={classes.xxxs}>{row.price}</TableCell>
                <TableCell className={classes.xs}>{row.hour}</TableCell>
                <TableCell className={classes.s}>{row.hour24}</TableCell>
                <TableCell className={classes.m}>{row.days7}</TableCell>
                <TableCell className={classes.l}>
                  {row.volumeMarketCap}
                </TableCell>
                <TableCell className={classes.xl}>
                  {row.circulatingTotalSupply}
                </TableCell>
                <TableCell className={classes.xxl}>{row.last7d}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
})

export default CoinsTable
