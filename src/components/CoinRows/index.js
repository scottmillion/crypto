import {
  BulletPoint,
  CellItem,
  CellItemNumber,
  Circle,
  Img,
  PercentDisplay,
} from './CoinRows.css'
import { formatCurrency } from '@coingecko/cryptoformat'
import { Arrow } from 'components/Arrow'
import { Cell } from 'components/Cell'
import CoinListChart from 'components/CoinListChart'
import { Row } from 'components/Row'
import { keyGen } from 'utils/keyGen'
import { convertLargeNumber } from 'utils/convertLargeNumber'
import { getArrow } from 'utils/getArrow'
import { shorterNumber } from 'utils/shorterNumber'
import {
  desktopCellWidths as widths,
  coinListPercentDisplayColors as colors,
} from 'utils/constants'

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
          <Row>
            <Cell key={keyGen()} width={widths[0]}>
              {index + 1}
            </Cell>

            <Cell key={keyGen()} width={widths[1]}>
              <Img src={image} alt={name} />
              {name} ({symbol.toUpperCase()})
            </Cell>

            <Cell key={keyGen()} width={widths[2]}>
              {convertLargeNumber(
                formatCurrency(current_price, props.currency, 'en'),
              )}
            </Cell>

            <Cell key={keyGen()} width={widths[3]} number={hourChange}>
              {(props.currency !== symbol && (
                <>
                  <Arrow content={getArrow(hourChange)} />
                  {Math.abs(hourChange.toFixed(2))}%
                </>
              )) || <span>-</span>}
            </Cell>

            <Cell
              key={keyGen()}
              width={widths[4]}
              number={twentyFourHourChange}
            >
              {(props.currency !== coin.symbol && (
                <>
                  <Arrow content={getArrow(twentyFourHourChange)} />
                  {Math.abs(twentyFourHourChange.toFixed(2))}%
                </>
              )) || <span>-</span>}
            </Cell>

            <Cell key={keyGen()} width={widths[5]} number={sevenDayChange}>
              {(props.currency !== symbol && (
                <>
                  <Arrow content={getArrow(sevenDayChange)} />
                  {Math.abs(sevenDayChange.toFixed(2))}%
                </>
              )) || <span>-</span>}
            </Cell>

            <Cell key={keyGen()} width={widths[6]}>
              <CellItem>
                <CellItemNumber color={colors[index][0]}>
                  <BulletPoint>&#8226;</BulletPoint>
                  {shorterNumber(
                    formatCurrency(total_volume, props.currency, 'en'),
                  )}
                </CellItemNumber>
                <CellItemNumber color={colors[index][1]}>
                  <BulletPoint>&#8226;</BulletPoint>
                  {shorterNumber(
                    formatCurrency(market_cap, props.currency, 'en'),
                  )}
                </CellItemNumber>
              </CellItem>
              <PercentDisplay
                percent={(100 * total_volume) / market_cap}
                color1={colors[index][0]}
                color2={colors[index][1]}
              >
                <Circle
                  color1={colors[index][0]}
                  percent={(100 * total_volume) / market_cap}
                />
              </PercentDisplay>
            </Cell>

            <Cell key={keyGen()} width={widths[7]}>
              <CellItem>
                <CellItemNumber color={colors[index][0]}>
                  <BulletPoint>&#8226;</BulletPoint>
                  {shorterNumber(
                    formatCurrency(circulating_supply, props.currency, 'en'),
                  ).slice(1)}
                </CellItemNumber>
                <CellItemNumber color={colors[index][1]}>
                  <BulletPoint>&#8226;</BulletPoint>
                  {(total_supply &&
                    shorterNumber(
                      formatCurrency(total_supply, props.currency, 'en'),
                    ).slice(1)) || <span>&#8734;</span>}
                </CellItemNumber>
              </CellItem>
              <PercentDisplay
                percent={
                  (100 * circulating_supply) / (total_supply || Infinity)
                }
                color1={colors[index][0]}
                color2={colors[index][1]}
              >
                <Circle
                  color1={colors[index][0]}
                  percent={
                    (100 * circulating_supply) / (total_supply || Infinity)
                  }
                />
              </PercentDisplay>
            </Cell>

            <Cell key={keyGen()} width={widths[8]}>
              <CoinListChart
                prices={sevenDayPriceList.price.filter(
                  (_, index) => index % 8 === 0,
                )}
                sevenDayChange={sevenDayChange}
                theme={props.theme}
              />
            </Cell>
          </Row>
        )
      })}
    </>
  )
}
