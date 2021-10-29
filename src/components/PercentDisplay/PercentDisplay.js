import { Circle, Total, Val1, Val2 } from './PercentDisplay.css'

const borderRadius = 10
const height = 8
const maxWidth = 250

const PercentDisplay = (props) => {
  const val1 = (props.val1 / props.total) * maxWidth
  const val2 = (props.val2 / props.total) * maxWidth

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
