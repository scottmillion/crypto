import { CellContent } from './Cell.css'

export const Cell = (props) => (
  <CellContent
    number={props.number}
    size={props.size}
    theme={props.theme}
    weight={props.weight}
    width={props.width}
  >
    {props.children}
  </CellContent>
)
