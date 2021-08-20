import {
  BulletPoint,
  PercentDisplay,
  PercentDisplayCircle,
  TopItem,
  TopItemsWrap,
} from 'components/RowPercentBar/RowPercentBar.css'

export const RowPercentBar = (props) => (
  <>
    <TopItemsWrap>
      <TopItem color={props.color1}>
        <BulletPoint>&#8226;</BulletPoint>
        {props.first}
      </TopItem>
      <TopItem color={props.color2}>
        <BulletPoint>&#8226;</BulletPoint>
        {props.second}
      </TopItem>
    </TopItemsWrap>
    <PercentDisplay
      percent={props.percent}
      color1={props.color1}
      color2={props.color2}
    >
      <PercentDisplayCircle color1={props.color1} percent={props.percent} />
    </PercentDisplay>
  </>
)
