import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <section className='question'>
      <header>
        <h4>{title}</h4>
        {/* Video Solution */}
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        {/* // My Solution:
        {!showInfo && (
          <button className='btn' onClick={showingInfo}>
            <AiOutlinePlus />
          </button>
        )}
        {showInfo && (
          <button className='btn' onClick={showingInfo}>
            <AiOutlineMinus />
          </button>
        )} */}
      </header>
      {showInfo && <p>{info}</p>}
    </section>
  )
}

export default Question
