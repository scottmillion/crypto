import React, { useState } from 'react'
import { Input, SearchList, SearchListItem } from './Search.css'
import { keyGen } from 'utils'
import { useSelector, useDispatch } from 'react-redux'
import { clearData, getSearchData } from 'store/search/actions.js'

import { useHistory } from 'react-router-dom'

const Search = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const { data, isLoading, error } = useSelector(
    (state) => state.search.navSearch,
  )
  const history = useHistory()

  const handleBlur = () => {
    dispatch(clearData('navSearch'))
    setValue('')
  }

  const handleClickSearchListItem = (coin) => {
    setTimeout(() => {
      dispatch(clearData('navSearch'))
      setValue('')
    }, 10)

    window.location.search
      ? history.push(`/coin/${coin.id}/${window.location.search}`)
      : history.push(`/coin/${coin.id}`)
  }

  const handleChange = (e) => {
    const { value } = e.target
    setValue(value)
    value === ''
      ? dispatch(clearData('navSearch'))
      : dispatch(getSearchData(value, 'navSearch'))
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
              let { name } = coin
              return (
                <SearchListItem
                  key={keyGen()}
                  onMouseDown={() => handleClickSearchListItem(coin)}
                >
                  {name.length > 21 ? name.slice(0, 21) + '...' : name}
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
