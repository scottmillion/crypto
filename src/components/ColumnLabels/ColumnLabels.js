import { Cell } from 'components'
import { columnLabelsText, desktopCellWidths as widths, keyGen } from 'utils'
import Media from 'react-media'

import styled from 'styled-components'
import { Filter } from '@styled-icons/boxicons-regular/Filter'
import { sortBy } from 'store/allCoins/actions.js'
import { useDispatch } from 'react-redux'

const StyledFilter = styled(Filter)`
  width: 20px;
  margin-left: 3px;
`

const ColumnLabels = () => {
  const dispatch = useDispatch()

  return (
    <>
      <Cell key={keyGen()} width={widths[0]} size={16} weight={500}>
        {columnLabelsText[0]}
      </Cell>

      <Cell key={keyGen()} width={widths[1]} size={16} weight={500}>
        {columnLabelsText[1]}
        <StyledFilter onClick={() => dispatch(sortBy('id'))} />
      </Cell>

      <Cell key={keyGen()} width={widths[2]} size={16} weight={500}>
        {columnLabelsText[2]}
        <StyledFilter onClick={() => dispatch(sortBy('current_price'))} />
      </Cell>

      <Cell key={keyGen()} width={widths[3]} size={16} weight={500}>
        {columnLabelsText[3]}
        <StyledFilter
          onClick={() =>
            dispatch(sortBy('price_change_percentage_1h_in_currency'))
          }
        />
      </Cell>

      <Cell key={keyGen()} width={widths[4]} size={16} weight={500}>
        {columnLabelsText[4]}
        <StyledFilter
          onClick={() =>
            dispatch(sortBy('price_change_percentage_24h_in_currency'))
          }
        />
      </Cell>

      <Cell key={keyGen()} width={widths[5]} size={16} weight={500}>
        {columnLabelsText[5]}
        <StyledFilter
          onClick={() =>
            dispatch(sortBy('price_change_percentage_7d_in_currency'))
          }
        />
      </Cell>

      <Media
        queries={{
          medium: '(min-width: 1200px)',
          large: '(min-width: 1500px)',
          xLarge: '(min-width: 1700px)',
        }}
      >
        {(matches) => (
          <>
            {matches.medium && (
              <Cell key={keyGen()} width={widths[6]} size={16} weight={500}>
                {columnLabelsText[6]}
              </Cell>
            )}
            {matches.xLarge && (
              <Cell key={keyGen()} width={widths[7]} size={16} weight={500}>
                {columnLabelsText[7]}
              </Cell>
            )}
            {matches.large && (
              <Cell key={keyGen()} width={widths[8]} size={16} weight={500}>
                {columnLabelsText[8]}
              </Cell>
            )}
          </>
        )}
      </Media>
    </>
  )
}
export default ColumnLabels
