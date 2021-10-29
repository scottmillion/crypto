import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Media from 'react-media'
import { ChartDisplay, CoinsTable, ChartSlider } from 'components'
import { screenSizeWidth } from 'utils'
import { getCoinsData, getPrices, getVolumes } from 'store/allCoins/actions.js'
import {
  ChartsContainer,
  CoinContainer,
  Container,
  ContentContainer,
  H1,
} from './AllCoins.css'

const AllCoins = () => {
  const dispatch = useDispatch()
  const {
    coinsData,
    priceDataLabels,
    priceDataPoints,
    volumeDataLabels,
    volumeDataPoints,
    isCoinsDataLoading,
    isPriceDataLoading,
    isVolumeDataLoading,
  } = useSelector((state) => state.allCoins)

  const { configLoaded, currency } = useSelector((state) => state.config)

  useEffect(() => {
    dispatch(getCoinsData())
    dispatch(getPrices())
    dispatch(getVolumes())
    // eslint-disable-next-line
  }, [currency])

  return (
    <Container>
      <ContentContainer>
        <H1>Overview</H1>

        <Media
          queries={{
            desktopS: screenSizeWidth.desktopS,
            mobile: screenSizeWidth.mobile,
          }}
        >
          {(matches) => (
            <>
              {matches.desktopS && configLoaded && (
                <ChartsContainer>
                  <ChartDisplay
                    data={coinsData}
                    dataLabels={priceDataLabels}
                    dataPoints={priceDataPoints}
                    isLoading={isPriceDataLoading}
                    label="Price"
                    legendTitle="Price"
                    type="Line"
                  />
                  <ChartDisplay
                    data={coinsData}
                    dataLabels={volumeDataLabels}
                    dataPoints={volumeDataPoints}
                    isLoading={isVolumeDataLoading}
                    label="Volume"
                    legendTitle="Volume 24h"
                    type="Bar"
                  />
                </ChartsContainer>
              )}
              {matches.mobile && configLoaded && (
                <ChartSlider
                  coinsData={coinsData}
                  priceDataLabels={priceDataLabels}
                  priceDataPoints={priceDataPoints}
                  isPriceDataLoading={isPriceDataLoading}
                  volumeDataLabels={volumeDataLabels}
                  volumeDataPoints={volumeDataPoints}
                  isVolumeDataLoading={isVolumeDataLoading}
                />
              )}
            </>
          )}
        </Media>

        <CoinContainer>
          <CoinsTable data={coinsData} isLoading={isCoinsDataLoading} />
        </CoinContainer>
      </ContentContainer>
    </Container>
  )
}

export default AllCoins
