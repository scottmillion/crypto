import React, { useState } from 'react'
import { Input, SearchList, SearchListItem } from './Search.css'
import { keyGen } from 'utils'
import { useSelector, useDispatch } from 'react-redux'
import { clearData, getSearchData } from 'store/search/actions.js'

const Search = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const { data, isLoading, error } = useSelector((state) => state.search)

  const handleBlur = () => {
    dispatch(clearData())
    setValue('')
  }

  const handleClickSearchListItem = (coinName) => {
    setTimeout(() => {
      dispatch(clearData())
      setValue(coinName)
    }, 10)
  }

  const handleChange = (e) => {
    const { value } = e.target
    setValue(value)
    value === '' ? dispatch(clearData()) : dispatch(getSearchData(value))
  }
  const displayLoading = isLoading && !error && value !== ''
  const displayData = !isLoading && !error && data.length > 0 && value !== ''

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
        {displayLoading && <div>Loading List...</div>}
        {displayData && (
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
