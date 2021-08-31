import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
import Media from 'react-media'
import { useSelector } from 'react-redux'

const NavUnder = () => {
  const [global, setGlobal] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { currency, currencySymbol } = useSelector((state) => state.config)

  const getGlobalData = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios('https://api.coingecko.com/api/v3/global')
      setIsLoading(false)
      setGlobal(data.data)
    } catch (error) {
      console.log('Global API Error!')
      console.log(error)
    }
  }

  useEffect(() => {
    getGlobalData()
  }, [])

  return (
    <NavWrap>
      <NavUnderContainer>
        {(global && !isLoading && (
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
                        Coins {global.active_cryptocurrencies}
                      </NavUnderLi>
                    )}
                    {matches.desktopL && (
                      <NavUnderLi>Exchange {global.markets}</NavUnderLi>
                    )}
                    {matches.desktopSM && (
                      <NavUnderLi>
                        <NavBulletPoint>&#8226;</NavBulletPoint>
                        {currencySymbol}
                        {prettierNumber(
                          Math.round(global.total_market_cap[currency]),
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
                {prettierNumber(Math.round(global.total_volume[currency]))}
                <PercentDisplay
                  percent={Math.round(
                    global.total_volume[currency] /
                      global.total_market_cap[currency],
                  )}
                >
                  <Circle
                    percent={Math.round(
                      global.total_volume[currency] /
                        global.total_market_cap[currency],
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
                {Math.round(global.market_cap_percentage.btc)}%
                <PercentDisplay
                  percent={Math.round(global.market_cap_percentage.btc)}
                >
                  <Circle
                    percent={Math.round(global.market_cap_percentage.btc)}
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
                {Math.round(global.market_cap_percentage.eth)}%
                <PercentDisplay
                  percent={Math.round(global.market_cap_percentage.eth)}
                >
                  <Circle
                    percent={Math.round(global.market_cap_percentage.eth)}
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
