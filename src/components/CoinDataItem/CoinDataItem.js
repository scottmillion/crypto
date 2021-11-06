import {
  CoinDataItemWrap,
  BluePlus,
  CoinDataLabel,
  DivsSameLine,
} from './CoinDataItem.css'

const CoinDataItem = (props) => (
  <CoinDataItemWrap>
    <BluePlus />
    <CoinDataLabel color={props.color}>{props.label}</CoinDataLabel>
    <DivsSameLine>{props.children}</DivsSameLine>
  </CoinDataItemWrap>
)

export default CoinDataItem
