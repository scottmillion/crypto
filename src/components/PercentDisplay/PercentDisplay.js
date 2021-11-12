import { Circle, Total, Val1, Val2 } from './PercentDisplay.css'

const borderRadius = 10
const height = 8
const maxWidth = 180

const PercentDisplay = (props) => {
  let val1 = (props.val1 / props.total) * maxWidth
  let val2 = (props.val2 / props.total) * maxWidth

  if (val1 > val2) {
    val2 = val1
    val1 = val1 + 5
  }

  return (
    <Total
      width={maxWidth}
      height={height}
      borderRadius={borderRadius}
      marginTop={props.marginTop}
    >
      <Val2 width={val2} height={height} borderRadius={borderRadius}>
        <Val1 width={val1} height={height} borderRadius={borderRadius}>
          <Circle left={val1} height={height} borderRadius={borderRadius} />
        </Val1>
      </Val2>
    </Total>
  )
}

export default PercentDisplay
