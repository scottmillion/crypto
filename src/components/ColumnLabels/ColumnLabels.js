import { Cell } from 'components'
import { columnLabelsText, desktopCellWidths as widths, keyGen } from 'utils'

const ColumnLabels = () =>
  columnLabelsText.map((text, index) => (
    <Cell key={keyGen()} width={widths[index]} size={16} weight={500}>
      {text}
    </Cell>
  ))

export default ColumnLabels
