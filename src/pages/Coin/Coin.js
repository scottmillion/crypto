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
  const { isLoading, data, error } = useSelector((state) => state.coin)
  const coinId = props.match.params.name
  const blockchainSites = data && data.links.blockchain_site
  const hasBlockchainSites = data && blockchainSites.length >= 3
  const dispatch = useDispatch()

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
            {data.description.en && (
              <>
                <H2>Description:</H2>

                <Description
                  dangerouslySetInnerHTML={{ __html: data.description.en }}
                />
              </>
            )}

            {hasBlockchainSites && (
              <LinkList>
                {blockchainSites[0] && (
                  <LinkItem
                    url={blockchainSites[0]}
                    themeColor="secondary"
                    padding="12px 18px"
                  />
                )}
                {blockchainSites[1] && (
                  <LinkItem
                    url={blockchainSites[1]}
                    themeColor="secondary"
                    padding="12px 18px"
                  />
                )}
                {blockchainSites[2] && (
                  <LinkItem
                    url={blockchainSites[2]}
                    themeColor="secondary"
                    padding="12px 18px"
                  />
                )}
              </LinkList>
            )}
          </>
        )}
      </ContentContainer>
    </Container>
  )
}

export default Coin
