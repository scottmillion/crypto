import React, { useEffect } from 'react'
import Media from 'react-media'
import { useDispatch, useSelector } from 'react-redux'
import { ChartDisplay, CoinsTable } from 'components'
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

  const currency = useSelector((state) => state.config.currency)

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
        <ChartsContainer>
          <Media
            queries={{
              desktopS: screenSizeWidth.desktopS,
            }}
          >
            {(matches) => (
              <>
                {matches.desktopS && (
                  <>
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
                  </>
                )}
              </>
            )}
          </Media>
        </ChartsContainer>
        <CoinContainer>
          <CoinsTable data={coinsData} isLoading={isCoinsDataLoading} />
        </CoinContainer>
      </ContentContainer>
    </Container>
  )
}

export default AllCoins
