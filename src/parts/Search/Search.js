import axios from 'axios'
import React from 'react'
import { Input, SearchList, SearchListItem } from './Search.css'
import { keyGen } from 'utils'

class Search extends React.Component {
  state = {
    value: '',
    data: [],
  }

  getAutoCompleteData = async (value) => {
    try {
      const { data } = await axios(
        `https://crypto-app-server.herokuapp.com/coins/${value}`,
      )
      this.setState({ data })
    } catch (error) {
      console.log('AutoCompleteData API Error!')
      console.log(error)
    }
  }

  handleBlur = () => {
    this.setState({ data: [], value: '' })
  }

  handleClickDataItem = (coinName) => {
    setTimeout(() => {
      this.setState({ data: [], value: coinName })
    }, 10)
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ value })
    value === '' ? this.setState({ data: [] }) : this.getAutoCompleteData(value)
  }

  render() {
    const { data, value } = this.state
    return (
      <>
        <Input
          minLength={1}
          debounceTimeout={300}
          onBlur={this.handleBlur}
          type="text"
          width="450"
          value={value}
          onChange={this.handleChange}
          placeholder="Search..."
        />
        {data.length > 0 && (
          <SearchList width="450">
            {data.map((coin) => {
              let coinName = coin.name
              return (
                <SearchListItem
                  key={keyGen()}
                  onMouseDown={() => this.handleClickDataItem(coinName)}
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
