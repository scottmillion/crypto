import { CellContent } from './Cell.css'

const Cell = (props) => (
  <CellContent number={props.number}>{props.children}</CellContent>
)

export default Cell
