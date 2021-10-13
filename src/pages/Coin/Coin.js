import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoinData } from 'store/coin/actions.js'

const Coin = (props) => {
  const coinId = props.match.params.name
  const { currency } = useSelector((state) => state.config)
  const dispatch = useDispatch()
  const { isLoading, data, error } = useSelector((state) => state.coin)

  useEffect(() => {
    dispatch(getCoinData(coinId))
    // eslint-disable-next-line
  }, [coinId])

  return (
    <>
      {console.log('data-inside')}
      {console.log(data)}
      <div>
        <h1>{coinId}</h1>
        {data && (
          <>
            <div>{currency}</div>
            <div>
              <img src={data.image.large} alt="" />
            </div>
            <div>{data.description.en}</div>
            <div>Homepage(s)</div>
            <div>{data.links.homepage.map((link) => link)}</div>

            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </>
        )}
      </div>
    </>
  )
}

export default Coin
