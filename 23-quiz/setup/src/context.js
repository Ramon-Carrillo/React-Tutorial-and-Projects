import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''
const tempUrl = `https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true)
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [error, setError] = useState({ status: false, message: '' })

  const [isModalOpen, setIsModalOpen] = useState(false)

  const fetchQuestions = async (url) => {
    setLoading(true)
    setWaiting(false)
    try {
      const response = await axios.get(url)
      if (response) {
        const data = response.data.results
        if (data.length > 0) {
          setQuestions(data)
          setLoading(false)
          setWaiting(false)
          setError(false)
        } else {
          setWaiting(true)
          setError({ status: true, message: 'No questions found' })
        }
      }
    } catch (error) {
      setError({ status: true, message: error.message })

      setWaiting(true)
    }
  }

  useEffect(() => {
    fetchQuestions(tempUrl)
  }, [])

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        currentIndex,
        score,
        error,
        isModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
