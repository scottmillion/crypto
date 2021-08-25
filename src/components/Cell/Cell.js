import { CellContent } from './Cell.css'

const Cell = (props) => (
  <>
    <CellContent
      number={props.number}
      size={props.size}
      weight={props.weight}
      width={props.width}
    >
      {props.children}
    </CellContent>
  </>
)

export default Cell
