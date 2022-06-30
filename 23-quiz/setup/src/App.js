import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  const {
    waiting,
    loading,
    questions,
    currentIndex,
    score,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext()

  if (waiting) {
    return <SetupForm />
  }
  if (loading) {
    return <Loading />
  }
  const { question, incorrect_answers, correct_answer } =
    questions[currentIndex]
  const answers = [...incorrect_answers, correct_answer]
  answers.sort(() => Math.random() - 0.5)

  //* Used the tempDiv instead of the dangerouslySetInnerHTML as used in the original code
  let tempQuestionDiv = document.createElement('div')
  tempQuestionDiv.innerHTML = question

  return (
    <main>
      <Modal />
      <section className='quiz'>
        <p className='correct-answers'>
          correct answers {score} / {currentIndex}
        </p>
        <article className='container'>
          <h2>{tempQuestionDiv.textContent || tempQuestionDiv.innerText}</h2>
          <div className='btn-container'>
            {answers.map((answer, index) => {
              let tempAnswerDiv = document.createElement('div')
              tempAnswerDiv.innerHTML = answer
              return (
                <button
                  key={index}
                  className='answer-btn'
                  onClick={() => checkAnswer(correct_answer === answer)}
                >
                  {tempAnswerDiv.textContent || tempAnswerDiv.innerText}
                </button>
              )
            })}
          </div>
        </article>
        <button className='next-question' onClick={nextQuestion}>
          Next Question
        </button>
      </section>
    </main>
  )
}

export default App
