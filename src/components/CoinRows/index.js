import { Cell } from 'components/Cell'
import CoinListChart from 'components/CoinListChart'
import { Row } from 'components/Row'
import { RowCurrentPrice } from 'components/RowCurrentPrice'
import { RowHourChange } from 'components/RowHourChange'
import { RowName } from 'components/RowName'
import { RowNumber } from 'components/RowNumber'
import { RowPercentBar } from 'components/RowPercentBar'
import { RowSevenDayChange } from 'components/RowSevenDayChange'
import { RowTwentyFourHourChange } from 'components/RowTwentyFourHourChange'
import { formatCurrency } from '@coingecko/cryptoformat'
import { keyGen } from 'utils/keyGen'
import { shorterNumber } from 'utils/shorterNumber'
import {
  desktopCellWidths as widths,
  coinListPercentDisplayColors as colors,
} from 'utils/constants'
import styled from 'styled-components'

const Hr = styled.div`
  width: 98%;
  border-top: 1px solid ${(props) => props.theme.hrLineTop};
  border-bottom: 1px solid ${(props) => props.theme.hrLineBottom};
`
const HrWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const CoinRows = (props) => {
  return (
    <>
      {props.data.map((coin, index) => {
        const {
          circulating_supply,
          current_price,
          image,
          market_cap,
          name,
          symbol,
          total_supply,
          total_volume,
          price_change_percentage_1h_in_currency: hourChange,
          price_change_percentage_24h_in_currency: twentyFourHourChange,
          price_change_percentage_7d_in_currency: sevenDayChange,
          sparkline_in_7d: sevenDayPriceList,
        } = coin

        return (
          <div key={keyGen()}>
            <Row>
              <Cell width={widths[0]}>
                <RowNumber number={index + 1} />
              </Cell>

              <Cell width={widths[1]}>
                <RowName
                  name={name}
                  symbol={symbol.toUpperCase()}
                  image={image}
                />
              </Cell>

              <Cell width={widths[2]}>
                <RowCurrentPrice
                  currentPrice={current_price}
                  currency={props.currency}
                />
              </Cell>

              <Cell width={widths[3]} number={hourChange}>
                <RowHourChange
                  currency={props.currency}
                  hourChange={hourChange}
                  symbol={symbol}
                />
              </Cell>

              <Cell width={widths[4]} number={twentyFourHourChange}>
                <RowTwentyFourHourChange
                  currency={props.currency}
                  symbol={coin.symbol}
                  twentyFourHourChange={twentyFourHourChange}
                />
              </Cell>

              <Cell width={widths[5]} number={sevenDayChange}>
                <RowSevenDayChange
                  currency={props.currency}
                  sevenDayChange={sevenDayChange}
                  symbol={symbol}
                />
              </Cell>

              <Cell width={widths[6]}>
                <RowPercentBar
                  color1={colors[index][0]}
                  color2={colors[index][1]}
                  first={shorterNumber(
                    formatCurrency(total_volume, props.currency, 'en'),
                  )}
                  second={shorterNumber(
                    formatCurrency(market_cap, props.currency, 'en'),
                  )}
                  percent={(100 * total_volume) / market_cap}
                />
              </Cell>

              <Cell width={widths[7]}>
                <RowPercentBar
                  color1={colors[index][0]}
                  color2={colors[index][1]}
                  first={shorterNumber(
                    formatCurrency(circulating_supply, props.currency, 'en'),
                  ).slice(1)}
                  second={
                    (total_supply &&
                      shorterNumber(
                        formatCurrency(total_supply, props.currency, 'en'),
                      ).slice(1)) || <span>&#8734;</span>
                  }
                  percent={
                    (100 * circulating_supply) / (total_supply || Infinity)
                  }
                />
              </Cell>

              <Cell width={widths[8]}>
                <CoinListChart
                  prices={sevenDayPriceList.price.filter(
                    (_, index) => index % 8 === 0,
                  )}
                  sevenDayChange={sevenDayChange}
                  theme={props.theme}
                />
              </Cell>
            </Row>
            {index !== 8 ? (
              <HrWrap>
                <Hr theme={props.theme} />
              </HrWrap>
            ) : (
              ''
            )}
          </div>
        )
      })}
    </>
  )
}
