import React, { useEffect } from 'react'
import Media from 'react-media'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { useDispatch, useSelector } from 'react-redux'

import { ChartDisplay, CoinsTable, ChartSlider, LoadingBox } from 'components'
import { keyGen, screenSizeWidth, timeIntervals } from 'utils'

import {
  getCoinsData,
  getChartsData,
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
    apiParams,
    coinsData,
    dataLabels,
    timeInterval,
    priceDataPoints,
    volumeDataPoints,
    isCoinsDataLoading,
    isChartsDataLoading,
  } = useSelector((state) => state.allCoins)

  const { currency } = useSelector((state) => state.config)

  const location = useLocation()

  useEffect(() => {
    dispatch(getChartsData())
    // eslint-disable-next-line
  }, [currency, timeInterval])

  useEffect(() => {
    const parsed = queryString.parse(location.search, { parseBooleans: true })
    dispatch(getCoinsData(parsed))
    // eslint-disable-next-line
  }, [currency, apiParams])

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
                    dataLabels={dataLabels}
                    dataPoints={priceDataPoints}
                    isLoading={isCoinsDataLoading || isChartsDataLoading}
                    label="Price"
                    legendTitle="Price"
                    type="Line"
                  />
                  <ChartDisplay
                    data={coinsData}
                    dataLabels={dataLabels}
                    dataPoints={volumeDataPoints}
                    isLoading={isCoinsDataLoading || isChartsDataLoading}
                    label="Volume"
                    legendTitle="Volume 24h"
                    type="Bar"
                  />
                </ChartsContainer>
              )}
              {matches.mobile && (
                <ChartSlider
                  data={coinsData}
                  dataLabels={dataLabels}
                  priceDataPoints={priceDataPoints}
                  volumeDataPoints={volumeDataPoints}
                  isLoading={isCoinsDataLoading || isChartsDataLoading}
                />
              )}
            </>
          )}
        </Media>

        <DataSelectContainer>
          {Object.keys(timeIntervals).map((interval) => {
            const days = timeIntervals[interval]
            return (
              <DataSelectItem
                onClick={() => onClickSelectItem(days)}
                highlight={timeInterval === days}
                key={keyGen()}
              >
                {interval}
              </DataSelectItem>
            )
          })}
        </DataSelectContainer>

        <CoinContainer>
          {(isCoinsDataLoading ||
            isChartsDataLoading ||
            coinsData.length < 1) && <LoadingBox height={250} />}
          {coinsData.length >= 1 &&
            !isCoinsDataLoading &&
            !isChartsDataLoading && (
              <CoinsTable
                data={coinsData}
                isLoading={isCoinsDataLoading || isChartsDataLoading}
              />
            )}
        </CoinContainer>
      </ContentContainer>
    </Container>
  )
}

export default AllCoins
