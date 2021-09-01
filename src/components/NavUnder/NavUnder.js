import React, { useEffect } from 'react'
import Media from 'react-media'
import { LoadingBox } from 'components'
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
import { prettierNumber, screenSizeWidth } from 'utils'
import { useSelector, useDispatch } from 'react-redux'
import { getGlobalData } from 'store/config/actions.js'

const NavUnder = () => {
  const { currency, currencySymbol, data, error, isLoading } = useSelector(
    (state) => state.config,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGlobalData())
    // eslint-disable-next-line
  }, [currency])

  return (
    <NavWrap>
      <NavUnderContainer>
        {error && <div>API Error. Refresh Page.</div>}
        {(data && !isLoading && (
          <div>
            <NavUnderUl>
              <Media
                queries={{
                  desktopS: screenSizeWidth.desktopS,
                  desktopSM: screenSizeWidth.desktopSM,
                  desktopM: screenSizeWidth.desktopM,
                  desktopML: screenSizeWidth.desktopML,
                  desktopL: screenSizeWidth.desktopL,
                }}
              >
                {(matches) => (
                  <>
                    {matches.desktopML && (
                      <NavUnderLi>
                        Coins {data.active_cryptocurrencies}
                      </NavUnderLi>
                    )}
                    {matches.desktopL && (
                      <NavUnderLi>Exchange {data.markets}</NavUnderLi>
                    )}
                    {matches.desktopSM && (
                      <NavUnderLi>
                        <NavBulletPoint>&#8226;</NavBulletPoint>
                        {currencySymbol}
                        {prettierNumber(
                          Math.round(data.total_market_cap[currency]),
                        )}
                      </NavUnderLi>
                    )}
                  </>
                )}
              </Media>

              <NavUnderLi>
                <Media
                  queries={{
                    desktopSM: screenSizeWidth.desktopSM,
                  }}
                >
                  {(matches) => (
                    <>
                      {matches.desktopSM && (
                        <NavBulletPoint>&#8226;</NavBulletPoint>
                      )}
                    </>
                  )}
                </Media>

                {currencySymbol}
                {prettierNumber(Math.round(data.total_volume[currency]))}
                <PercentDisplay
                  percent={Math.round(
                    data.total_volume[currency] /
                      data.total_market_cap[currency],
                  )}
                >
                  <Circle
                    percent={Math.round(
                      data.total_volume[currency] /
                        data.total_market_cap[currency],
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
                {Math.round(data.market_cap_percentage.btc)}%
                <PercentDisplay
                  percent={Math.round(data.market_cap_percentage.btc)}
                >
                  <Circle
                    percent={Math.round(data.market_cap_percentage.btc)}
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
                {Math.round(data.market_cap_percentage.eth)}%
                <PercentDisplay
                  percent={Math.round(data.market_cap_percentage.eth)}
                >
                  <Circle
                    percent={Math.round(data.market_cap_percentage.eth)}
                  />
                </PercentDisplay>
              </NavUnderLi>
            </NavUnderUl>
          </div>
        )) || <LoadingBox bar={true} />}
      </NavUnderContainer>
    </NavWrap>
  )
}

export default NavUnder
