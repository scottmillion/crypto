import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoinData } from 'store/coin/actions.js'
import { CoinSummary, LinkItem, LoadingBox } from 'components'
import {
  Container,
  ContentContainer,
  Description,
  H1,
  H2,
  LinkList,
} from './Coin.css'

const Coin = (props) => {
  const coinId = props.match.params.name
  const dispatch = useDispatch()
  const { isLoading, data, error } = useSelector((state) => state.coin)
  useEffect(() => {
    dispatch(getCoinData(coinId))
    // eslint-disable-next-line
  }, [coinId])

  return (
    <Container>
      <ContentContainer>
        <H1>Your Summary:</H1>
        {isLoading && <LoadingBox height={300} />}
        {error && <div>API ERROR</div>}
        {!isLoading && !error && data && (
          <>
            <CoinSummary data={data} />
            <H2>Description:</H2>
            <Description
              dangerouslySetInnerHTML={{ __html: data.description.en }}
            />

            {data.links.blockchain_site.length >= 3 && (
              <LinkList>
                <LinkItem
                  url={data.links.blockchain_site[0]}
                  themeColor="secondary"
                  padding="12px 18px"
                />
                <LinkItem
                  url={data.links.blockchain_site[1]}
                  themeColor="secondary"
                  padding="12px 18px"
                />
                <LinkItem
                  url={data.links.blockchain_site[2]}
                  themeColor="secondary"
                  padding="12px 18px"
                />
              </LinkList>
            )}
          </>
        )}
      </ContentContainer>
    </Container>
  )
}

export default Coin
