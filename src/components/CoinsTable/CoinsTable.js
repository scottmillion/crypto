import React, { useContext } from 'react'
import { LoadingBox } from 'components'
import { keyGen, rows } from 'utils'

import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCellUI from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRowUI from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { Filter } from '@styled-icons/boxicons-regular/Filter'
import { sortBy } from 'store/allCoins/actions.js'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeContext } from 'styled-components'
import styled from 'styled-components'

const StyledFilter = styled(Filter)`
  width: 20px;
  margin-left: 1px;
`

const CoinsTable = React.memo((props) => {
  const { data, isLoading } = props
  const themeContext = useContext(ThemeContext)
  const dispatch = useDispatch()
  const { config } = useSelector((state) => state.allCoins)

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  })

  const classes = useStyles()

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

  return (
    <>
      {(!isLoading && data.length > 1 && (
        <TableContainer component={Paper} elevation={0} square={true}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <HeaderRow>
                {Object.keys(config).map((label) => (
                  <TableCell key={keyGen()}>
                    {config[label].key}
                    {config[label].sortBy && (
                      <StyledFilter
                        onClick={() =>
                          dispatch(sortBy(`${config[label].sortBy}`))
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
})

export default CoinsTable
