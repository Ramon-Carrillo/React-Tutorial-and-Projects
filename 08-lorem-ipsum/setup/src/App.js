import React, { useState } from 'react'

const url = 'https://baconipsum.com/api/?type=all-meat&paras='
function App() {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`${url}${count}`)
    const data = await response.json()
    setText(data)
  }

  return (
    <section className='section-center'>
      <h3>Tired of boring lorem ipsum?</h3>
      <h4>
        <span role='img' aria-label='pig'>
          🐖
        </span>
        Then try Bacon Ipsum
        <span role='img' aria-label='pig'>
          🐖
        </span>
      </h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Amount of paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          min='1'
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  )
}

export default App
