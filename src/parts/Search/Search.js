import axios from 'axios'
import React from 'react'
import { Input, SearchList, SearchListItem } from './Search.css'
import { keyGen } from 'utils'
class Search extends React.Component {
  state = {
    value: '',
    matches: null,
  }

  getAutoCompleteData = async (value) => {
    try {
      const { data } = await axios(
        `https://crypto-app-server.herokuapp.com/coins/${value}`,
      )
      let matches = []
      matches = data.filter((coin) => {
        const regex = new RegExp(`${value}`, 'gi')
        return coin.name.match(regex)
      })
      this.setState({ matches })
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
    value === ''
      ? this.setState({ matches: null })
      : this.getAutoCompleteData(value)
    this.setState({ value })
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
                  <div>
                    {coinName.length >= 40
                      ? coinName.slice(0, 40) + '...'
                      : coinName}
                  </div>
                </SearchListItem>
              )
            })}
          </SearchList>
        )}
      </>
    )
  }
}

export default Search
