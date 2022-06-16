import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    type: '',
    message: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      //display alert
      showAlert(true, 'danger', 'Please enter a value')
    } else if (name && isEditing) {
      // deal with edit
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        }),
      )
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'Item updated')
    } else {
      showAlert(true, 'success', 'Item added')
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show = false, type = '', message = '') => {
    setAlert({ show, type, message })
  }
  const clearList = () => {
    showAlert(true, 'danger', 'List cleared')
    setList([])
  }
  const handleDelete = (id) => {
    showAlert(true, 'danger', 'Item deleted')
    setList(list.filter((item) => item.id !== id))
  }
  const handleEdit = (id) => {
    const editItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(editItem.title)
  }
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>Grocery List</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. ham'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List
            items={list}
            handleDelete={handleDelete}
            editItem={handleEdit}
          />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  )
}

export default App
