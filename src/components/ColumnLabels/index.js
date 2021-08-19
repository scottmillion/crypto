import { Row } from './ColumnLabels.css'
import { Cell } from 'components/Cell'
import { keyGen } from 'utils/keyGen'
import {
  desktopCellWidths as widths,
  columnLabelsText as labels,
} from 'utils/constants'

export const ColumnLabels = (props) => (
  <Row>
    {widths.map((width, index) => (
      <Cell key={keyGen()} width={width} weight={700} size={16}>
        {labels[index]}
      </Cell>
    ))}
  </Row>
)
