import { formatCurrency } from '@coingecko/cryptoformat'
import { Cell, Column, ColumnPercentBar } from 'components'
import {
  coinListPercentDisplayColors as colors,
  keyGen,
  shorterNumber,
} from 'utils'

const ColumnCirculatingTotalSupply = (props) => (
  <Column>
    <Cell isLabel={true} weight={700} size={16}>
      Circulating/Total Supply
    </Cell>
    {props.columnCirculatingTotalSupply.map((obj, index) => {
      return (
        <Cell
          key={keyGen()}
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

export default ColumnCirculatingTotalSupply
