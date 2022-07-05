import React, { useState, useEffect } from 'react'
import mockUser from './mockData.js/mockUser'
import mockRepos from './mockData.js/mockRepos'
import mockFollowers from './mockData.js/mockFollowers'
import axios from 'axios'

const rootUrl = 'https://api.github.com'

const GithubContext = React.createContext()

//* Provider, Consumer, - GithubContext.Provider
const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)
  const [loading, setLoading] = useState(false)
  const [requests, setRequests] = useState(0)
  const [error, setError] = useState({ show: false, msg: '' })

  const searchUser = async (user) => {
    setLoading(true)
    toggleError({ show: false, msg: '' })
    try {
      const res = await axios.get(`${rootUrl}/users/${user}`)
      setGithubUser(res.data)
      const { login, followers_url } = res.data
      const resRepos = await axios(`${rootUrl}/users/${login}/repos?
      per_page=100`)
      const resFollowers = await axios(`${followers_url}?per_page=100`)
      setRepos(resRepos.data)
      setFollowers(resFollowers.data)
      setLoading(false)
      checkRequests()
    } catch (err) {
      toggleError(true, 'User not found')
      setLoading(false)
    }
  }

  const checkRequests = async () => {
    try {
      const res = await axios.get(`${rootUrl}/rate_limit`)
      let data = await res.data.rate.remaining
      setRequests(data)
      if (data === 0) {
        toggleError({ show: true, msg: 'You have reached your request limit' })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const toggleError = (show = false, msg = '') => {
    setError({ show, msg })
  }

  useEffect(() => {
    checkRequests()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchUser,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export { GithubContext, GithubProvider }
