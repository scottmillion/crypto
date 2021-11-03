import { useState } from 'react'
import {
  CloseButton,
  SaveButton,
  Buttons,
  CloseOption,
  CoinThumbnail,
  Img,
  ImgPlaceHolder,
  ImgWrap,
  Form,
  FormContainer,
  H2,
  Input,
  P,
  PopUp,
  PopUpContent,
  PopUpWrap,
  SearchList,
  SearchListItem,
} from './PortfolioPopUp.css'
import { keyGen, getFormattedDate } from 'utils'
import { useDispatch, useSelector } from 'react-redux'
import { clearData, getSearchData } from 'store/search/actions.js'
import { addCoin } from 'store/portfolio/actions.js'

const PortfolioPopUp = (props) => {
  const { data, isLoading, error } = useSelector(
    (state) => state.search.portfolioSearch,
  )
  const dispatch = useDispatch()

  const [coinData, setCoinData] = useState({})
  const [coinName, setCoinName] = useState('')
  const [amountOwned, setAmountOwned] = useState('')
  const [purchaseDate, setPurchaseDate] = useState(getFormattedDate())

  const handleClickSearchListItem = (name) => {
    setTimeout(() => {
      setCoinName(name)
      setCoinData(data.find((coin) => coin.name === name))
      dispatch(clearData('portfolioSearch'))
    }, 10)
  }

  const handleChange = (e) => {
    const { value } = e.target
    setCoinName(value)
    value === ''
      ? dispatch(clearData('portfolioSearch'))
      : dispatch(getSearchData(value, 'portfolioSearch'))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addCoin(coinData.id, amountOwned, purchaseDate))
    props.setShowPopUp(!props.showPopUp)
  }

  const displayLoading = isLoading && !error && coinName !== ''
  const displayData = !isLoading && !error && data.length > 0 && coinName !== ''

  return (
    <PopUpWrap>
      <PopUp>
        <PopUpContent>
          <CloseOption onClick={() => props.setShowPopUp(!props.showPopUp)}>
            &times;
          </CloseOption>
          <H2>Select Coins</H2>
          <FormContainer>
            <CoinThumbnail>
              <ImgWrap>
                {(coinData.large && <Img src={coinData.large} alt="" />) || (
                  <ImgPlaceHolder>
                    <p>1. Type coin name, then select from dropdown</p>
                    <br />
                    <p>2. Type amount owned (default: 0)</p>
                    <br />
                    <p>3. Type date purchased (default: today)</p>
                  </ImgPlaceHolder>
                )}
              </ImgWrap>
              {coinData.name && coinData.symbol && (
                <div>
                  {coinData.name} ({coinData.symbol.toUpperCase()})
                </div>
              )}
            </CoinThumbnail>
            <Form id="addCoinForm" onSubmit={handleSubmit}>
              <div>
                <Input
                  type="text"
                  value={coinName}
                  placeholder="Coin Name..."
                  onChange={handleChange}
                  minLength={1}
                  debounceTimeout={300}
                />
                <SearchList>
                  {error && <div>Api Error. Refresh Page.</div>}
                  {displayLoading && <div>Loading List...</div>}
                  {displayData && (
                    <>
                      {data.map((coin) => {
                        let { name } = coin
                        return (
                          <SearchListItem
                            key={keyGen()}
                            onMouseDown={() => handleClickSearchListItem(name)}
                          >
                            {name.length > 21
                              ? name.slice(0, 21) + '...'
                              : name}
                          </SearchListItem>
                        )
                      })}
                    </>
                  )}
                </SearchList>
              </div>
              <Input
                type="text"
                onChange={(e) => setAmountOwned(e.target.value)}
                placeholder="Amount Owned..."
                value={amountOwned}
              />
              <Input
                type="date"
                onChange={(e) => setPurchaseDate(e.target.value)}
                value={purchaseDate}
              />
            </Form>
          </FormContainer>
          <P>
            **If you submit a coin already in your inventory it will overwrite
            previous data.
          </P>
          <Buttons>
            <CloseButton onClick={() => props.setShowPopUp(!props.showPopUp)}>
              Close
            </CloseButton>
            <SaveButton type="submit" form="addCoinForm">
              Save and Close
            </SaveButton>
          </Buttons>
        </PopUpContent>
      </PopUp>
    </PopUpWrap>
  )
}

export default PortfolioPopUp
