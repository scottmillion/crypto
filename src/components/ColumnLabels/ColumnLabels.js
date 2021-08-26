import { Cell } from 'components'
import { columnLabelsText, desktopCellWidths as widths, keyGen } from 'utils'
import Media from 'react-media'

const ColumnLabels = () => (
  <>
    {columnLabelsText.map(
      (text, index) =>
        index < 6 && (
          <Cell key={keyGen()} width={widths[index]} size={16} weight={500}>
            {text}
          </Cell>
        ),
    )}
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
export default ColumnLabels
