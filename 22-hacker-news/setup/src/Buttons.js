import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { isLoading, page, totalPages, handlePage } = useGlobalContext()
  return (
    <div className='btn-container'>
      <button onClick={() => handlePage('dec')} disabled={isLoading}>
        Prev
      </button>
      <p>
        {page + 1} of {totalPages}
      </p>
      <button onClick={() => handlePage('inc')} disabled={isLoading}>
        Next
      </button>
    </div>
  )
}

export default Buttons
