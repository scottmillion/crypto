import axios from 'axios'
import React, { useState } from 'react'
import { Input, SearchList, SearchListItem } from './Search.css'
import { keyGen } from 'utils'

const Search = () => {
  const [value, setValue] = useState('')
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const getAutoCompleteData = async (value) => {
    setIsLoading(true)
    try {
      const { data } = await axios(
        `https://crypto-app-server.herokuapp.com/coins/${value}`,
      )
      setData(data)
      setIsLoading(false)
    } catch (error) {
      console.log('AutoCompleteData API Error!')
      console.log(error)
      setIsLoading(false)
      setError(true)
    }
  }

  const handleBlur = () => {
    setData([])
    setValue('')
  }

  const handleClickSearchListItem = (coinName) => {
    setTimeout(() => {
      setData([])
      setValue(coinName)
    }, 10)
  }

  const handleChange = (e) => {
    const { value } = e.target
    setValue(value)
    value === '' ? setData([]) : getAutoCompleteData(value)
  }

  return (
    <>
      <Input
        minLength={1}
        debounceTimeout={300}
        onBlur={handleBlur}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search..."
      />

      <SearchList>
        {error && <div>Api Error. Refresh Page.</div>}
        {isLoading && !error && <div>Loading List...</div>}
        {!isLoading && !error && data.length > 0 && (
          <>
            {data.map((coin) => {
              let coinName = coin.name
              return (
                <SearchListItem
                  key={keyGen()}
                  onMouseDown={() => handleClickSearchListItem(coinName)}
                >
                  {coinName.length > 21
                    ? coinName.slice(0, 21) + '...'
                    : coinName}
                </SearchListItem>
              )
            })}
          </>
        )}
      </SearchList>
    </>
  )
}

export default Search
