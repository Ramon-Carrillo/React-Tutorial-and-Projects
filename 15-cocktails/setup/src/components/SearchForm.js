import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='search'>Search</label>
          <input
            type='text'
            id='search'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
