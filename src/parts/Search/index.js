import axios from 'axios'
import React from 'react'
import { Input, SearchList, SearchListItem } from './Search.css'
import { keyGen } from 'utils/keyGen'

export default class Search extends React.Component {
  state = {
    value: '',
    data: null,
    matches: null,
  }

  getAutoCompleteData = async () => {
    try {
      const { data } = await axios(
        'https://api.coingecko.com/api/v3/coins/list',
      )
      this.setState({ data })
    } catch (error) {
      console.log('Global API Error!')
      console.log(error)
    }
  }

  handleBlur = () => {
    setTimeout(() => {
      this.setState({ matches: null })
    }, 100)
  }

  handleClickMatchItem = (coinName) => {
    this.setState({ matches: null, value: coinName })
  }

  handleChange = (e) => {
    const { value } = e.target
    let matches = []
    if (value.length > 0) {
      matches = this.state.data.filter((coin) => {
        const regex = new RegExp(`${value}`, 'gi')
        return coin.name.match(regex)
      })
    }
    this.setState({ value, matches })
  }

  componentDidMount() {
    this.getAutoCompleteData()
  }

  render() {
    const { matches, value } = this.state
    return (
      <>
        <Input
          onBlur={this.handleBlur}
          type="text"
          width="450"
          value={value}
          onChange={this.handleChange}
          placeholder="Search..."
        />
        {matches && (
          <SearchList width="450">
            {matches.map((match) => {
              let coinName = match.name
              return (
                <SearchListItem
                  key={keyGen()}
                  onClick={() => this.handleClickMatchItem(coinName)}
                >
                  {coinName.length >= 40
                    ? coinName.slice(0, 40) + '...'
                    : coinName}
                </SearchListItem>
              )
            })}
          </SearchList>
        )}
      </>
    )
  }
}
