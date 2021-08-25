import {
  Circle,
  NavBulletPoint,
  NavWrap,
  NavUnderContainer,
  NavUnderImg,
  NavUnderUl,
  NavUnderLi,
  PercentDisplay,
} from './NavUnder.css'
import { prettierNumber } from 'utils'

const NavUnder = (props) => (
  <NavWrap>
    <NavUnderContainer>
      {!props.global && <div>Loading Global API...</div>}
      {props.global && !props.isLoading && (
        <div>
          <NavUnderUl>
            <NavUnderLi>
              Coins {props.global.active_cryptocurrencies}
            </NavUnderLi>
            <NavUnderLi>Exchange {props.global.markets}</NavUnderLi>
            <NavUnderLi>
              <NavBulletPoint>&#8226;</NavBulletPoint>
              {props.currencySymbol}
              {prettierNumber(
                Math.round(props.global.total_market_cap[props.currency]),
              )}
            </NavUnderLi>
            <NavUnderLi>
              <NavBulletPoint>&#8226;</NavBulletPoint>
              {props.currencySymbol}
              {prettierNumber(
                Math.round(props.global.total_volume[props.currency]),
              )}
              <PercentDisplay
                percent={Math.round(
                  props.global.total_volume[props.currency] /
                    props.global.total_market_cap[props.currency],
                )}
              >
                <Circle
                  percent={Math.round(
                    props.global.total_volume[props.currency] /
                      props.global.total_market_cap[props.currency],
                  )}
                />
              </PercentDisplay>
            </NavUnderLi>
            <NavUnderLi>
              <NavUnderImg marginRight="1">
                <img
                  src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579"
                  alt="btc thumb"
                />
              </NavUnderImg>
              {Math.round(props.global.market_cap_percentage.btc)}%
              <PercentDisplay
                percent={Math.round(props.global.market_cap_percentage.btc)}
              >
                <Circle
                  percent={Math.round(props.global.market_cap_percentage.btc)}
                />
              </PercentDisplay>
            </NavUnderLi>
            <NavUnderLi>
              <NavUnderImg marginRight="-4">
                <img
                  src="https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880"
                  alt="eth thumb"
                />
              </NavUnderImg>
              {Math.round(props.global.market_cap_percentage.eth)}%
              <PercentDisplay
                percent={Math.round(props.global.market_cap_percentage.eth)}
              >
                <Circle
                  percent={Math.round(props.global.market_cap_percentage.eth)}
                />
              </PercentDisplay>
            </NavUnderLi>
          </NavUnderUl>
        </div>
      )}
    </NavUnderContainer>
  </NavWrap>
)

export default NavUnder
