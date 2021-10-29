import {
  CoinDataItemWrap,
  BluePlus,
  CoinDataLabel,
  DivsSameLine,
} from './CoinDataItem.css'

const CoinDataItem = (props) => (
  <CoinDataItemWrap>
    <DivsSameLine>
      <BluePlus />
      <CoinDataLabel color={props.color}>{props.label}</CoinDataLabel>
      {props.children}
    </DivsSameLine>
  </CoinDataItemWrap>
)

export default CoinDataItem
