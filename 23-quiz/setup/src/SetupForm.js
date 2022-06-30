import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext()
  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>Setup Quiz</h2>
          <div className='form-control'>
            <label htmlFor='amount'>number of questions</label>
            <input
              className='form-input'
              type='number'
              name='amount'
              id='amount'
              value={quiz.amount}
              onChange={handleChange}
              min='1'
              max='50'
            />
          </div>
          <div className='form-control'>
            <label htmlFor='category'>category</label>
            <select
              name='category'
              id='category'
              value={quiz.category}
              onChange={handleChange}
              className='form-input'
            >
              <option value='sports'>sports</option>
              <option value='history'>history </option>
              <option value='politics'>politics</option>
            </select>
          </div>
          <div className='form-control'>
            <label htmlFor='difficulty'>difficulty</label>
            <select
              name='difficulty'
              id='difficulty'
              value={quiz.difficulty}
              onChange={handleChange}
              className='form-input'
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
          </div>
          {error && (
            <p className='error'>
              Can not generate questions, please try a different options.
            </p>
          )}
          <button type='submit' onClick={handleSubmit} className='submit-btn'>
            start
          </button>
        </form>
      </section>
    </main>
  )
}

export default SetupForm
