import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Media from 'react-media'
import { ChartDisplay, CoinsTable, ChartSlider } from 'components'
import { keyGen, screenSizeWidth, timeIntervals } from 'utils'
import {
  getCoinsData,
  getPrices,
  getVolumes,
  setTimeInterval,
} from 'store/allCoins/actions.js'
import {
  ChartsContainer,
  CoinContainer,
  Container,
  ContentContainer,
  DataSelectContainer,
  DataSelectItem,
  H1,
} from './AllCoins.css'

const AllCoins = () => {
  const dispatch = useDispatch()
  const {
    coinsData,
    dataPointTimeInterval,
    priceDataLabels,
    priceDataPoints,
    volumeDataLabels,
    volumeDataPoints,
    isCoinsDataLoading,
    isPriceDataLoading,
    isVolumeDataLoading,
  } = useSelector((state) => state.allCoins)

  const { currency } = useSelector((state) => state.config)

  useEffect(() => {
    dispatch(getCoinsData())
    // eslint-disable-next-line
  }, [currency])

  useEffect(() => {
    dispatch(getPrices())
    dispatch(getVolumes())
    // eslint-disable-next-line
  }, [currency, dataPointTimeInterval])

  const onClickSelectItem = (days) => {
    dispatch(setTimeInterval(days))
  }

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
              {matches.desktopS && (
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
              {matches.mobile && (
                <ChartSlider
                  data={coinsData}
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

        {!isCoinsDataLoading && (
          <DataSelectContainer>
            {Object.keys(timeIntervals).map((interval) => {
              const days = timeIntervals[interval]
              return (
                <DataSelectItem
                  onClick={() => onClickSelectItem(days)}
                  highlight={dataPointTimeInterval === days}
                  key={keyGen()}
                >
                  {interval}
                </DataSelectItem>
              )
            })}
          </DataSelectContainer>
        )}

        <CoinContainer>
          <CoinsTable data={coinsData} isLoading={isCoinsDataLoading} />
        </CoinContainer>
      </ContentContainer>
    </Container>
  )
}

export default AllCoins
