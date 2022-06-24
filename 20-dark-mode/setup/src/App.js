import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {
  const [theme, setTheme] = useState('light-theme')

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme')
  }

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>Overreacted</h1>
          <button className='btn' onClick={toggleTheme}>
            toggle theme
          </button>
        </div>
      </nav>
      <section className='articles'>
        {data.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </section>
    </main>
  )
}

export default App
