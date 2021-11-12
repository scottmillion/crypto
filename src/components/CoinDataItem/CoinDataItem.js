import {
  CoinDataItemWrap,
  BluePlus,
  CoinDataLabel,
  DivsSameLine,
  Item,
} from './CoinDataItem.css'

const CoinDataItem = (props) => (
  <CoinDataItemWrap>
    <BluePlus />
    <Item>
      <CoinDataLabel color={props.color}>{props.label}</CoinDataLabel>
      <DivsSameLine>{props.children}</DivsSameLine>
    </Item>
  </CoinDataItemWrap>
)

export default CoinDataItem
