import { coinListPercentDisplayColors as colors } from 'utils/constants'
import { Column } from 'components/Column'
import { Cell } from 'components/Cell'
import { shorterNumber } from 'utils/shorterNumber'
import { formatCurrency } from '@coingecko/cryptoformat'
import { ColumnPercentBar } from 'components/ColumnPercentBar'

export const ColumnCirculatingTotalSupply = (props) => (
  <Column>
    <Cell isLabel={true} weight={700} size={16}>
      Circulating/Total Supply
    </Cell>
    {props.columnCirculatingTotalSupply.map((obj, index) => {
      return (
        <Cell
          turnHrOff={index === props.columnCirculatingTotalSupply.length - 1}
        >
          <ColumnPercentBar
            color1={colors[index][0]}
            color2={colors[index][1]}
            first={shorterNumber(
              formatCurrency(obj.circulatingSupply, props.currency, 'en'),
            ).slice(1)}
            second={
              (obj.totalSupply &&
                shorterNumber(
                  formatCurrency(obj.totalSupply, props.currency, 'en'),
                ).slice(1)) || <span>&#8734;</span>
            }
            percent={
              (100 * obj.circulatingSupply) / (obj.totalSupply || Infinity)
            }
          />
        </Cell>
      )
    })}
  </Column>
)
