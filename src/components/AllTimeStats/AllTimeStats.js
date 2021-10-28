import { HighLowContainer } from './AllTimeStats.css'
import { ColumnCurrentPrice } from 'components'
import { useSelector } from 'react-redux'

const AllTimeStats = (props) => {
  const { currency } = useSelector((state) => state.config)
  const {
    ath,
    ath_change_percentage,
    ath_date,
    atl,
    atl_change_percentage,
    atl_date,
  } = props.marketData || {}

  return (
    <>
      {console.log(props.marketData)}
      {console.log(currency)}
      <HighLowContainer>
        <div>
          All Time High:
          <ColumnCurrentPrice price={ath[currency]} />
        </div>
        <div>{ath_change_percentage[currency].toFixed(2)}%</div>
        <div>{ath_date[currency].slice(0, 10)}</div>
      </HighLowContainer>

      <HighLowContainer>
        All Time Low:
        <ColumnCurrentPrice price={atl[currency]} />
        <div>{atl_change_percentage[currency].toFixed(2)}%</div>
        <div>{atl_date[currency].slice(0, 10)}</div>
      </HighLowContainer>
    </>
  )
}

export default AllTimeStats
