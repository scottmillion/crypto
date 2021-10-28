import { CoinDataItemWrap, BluePlus, CoinDataLabel } from './CoinDataItem.css'

const CoinDataItem = (props) => (
  <CoinDataItemWrap>
    <BluePlus />
    <CoinDataLabel color={props.color}>{props.label}</CoinDataLabel>
    {props.children}
  </CoinDataItemWrap>
)

export default CoinDataItem
