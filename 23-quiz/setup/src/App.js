import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  const { waiting, loading, questions, currentIndex, score } =
    useGlobalContext()

  if (waiting) {
    return <SetupForm />
  }
  if (loading) {
    return <Loading />
  }
  const { question, incorrect_answers, correct_answer } = questions[9]
  const answers = [...incorrect_answers, correct_answer]
  //* Used the tempDiv instead of the dangerouslySetInnerHTML as used in the original code
  let tempDiv = document.createElement('div')
  tempDiv.innerHTML = question

  return (
    <main>
      {/* <Modal /> */}
      <section className='quiz'>
        <p className='correct-answers'>
          correct answers {score} / {currentIndex}{' '}
        </p>
        <article className='container'>
          <h2>{tempDiv.textContent || tempDiv.innerText}</h2>
        </article>
      </section>
    </main>
  )
}

export default App
