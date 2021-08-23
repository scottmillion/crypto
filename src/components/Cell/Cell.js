import { CellContent, Hr } from './Cell.css'

const Cell = (props) => (
  <>
    <CellContent
      number={props.number}
      size={props.size}
      theme={props.theme}
      weight={props.weight}
      width={props.width}
      isLabel={props.isLabel}
    >
      {props.children}
    </CellContent>
    <Hr
      isLabel={props.isLabel}
      turnHrOff={props.turnHrOff}
      hrWidth={props.hrWidth}
    />
  </>
)

export default Cell
