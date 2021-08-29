import axios from 'axios'
import React, { useState } from 'react'
import { Input, SearchList, SearchListItem } from './Search.css'
import { keyGen } from 'utils'

const Search = () => {
  const [value, setValue] = useState('')
  const [data, setData] = useState([])

  const getAutoCompleteData = async (value) => {
    try {
      const { data } = await axios(
        `https://crypto-app-server.herokuapp.com/coins/${value}`,
      )
      setData(data)
    } catch (error) {
      console.log('AutoCompleteData API Error!')
      console.log(error)
    }
  }

  const handleBlur = () => {
    setData([])
    setValue('')
  }

  const handleClickDataItem = (coinName) => {
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
      {data.length > 0 && (
        <SearchList>
          {data.map((coin) => {
            let coinName = coin.name
            return (
              <SearchListItem
                key={keyGen()}
                onMouseDown={() => handleClickDataItem(coinName)}
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

export default Search
