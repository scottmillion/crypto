import { AllTimeData, Label, HighLowContainer } from './AllTimeStats.css'
import { ColumnCurrentPrice } from 'components'
import { getFormattedDate } from 'utils'
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

  const athDate = getFormattedDate(Date.parse(ath_date[currency]))
  const atlDate = getFormattedDate(Date.parse(atl_date[currency]))

  return (
    <HighLowContainer>
      <AllTimeData>
        <div>
          <Label>ATH:</Label>
          <ColumnCurrentPrice price={ath[currency]} />
        </div>
        <div>{ath_change_percentage[currency].toFixed(2)}%</div>
        <div>{athDate}</div>
      </AllTimeData>
      <AllTimeData>
        <Label>ATL:</Label>

        <ColumnCurrentPrice price={atl[currency]} />
        <div>{atl_change_percentage[currency].toFixed(2)}%</div>
        <div>{atlDate}</div>
      </AllTimeData>
    </HighLowContainer>
  )
}

export default AllTimeStats
