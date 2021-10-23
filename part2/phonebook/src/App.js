import React, {useState} from 'react'
import './index.css'

const App = () => {

  const [people, setPeople] = useState([
    {'name': 'Arto Hellas'},
  ])

  const [newName, setNewName] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    setPeople(people.concat({'name': newName}))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
    <h2>Phonebook</h2>
    <form onSubmit = {addPerson}>
      <div>
        <input value = {newName} onChange = {handleNameChange} />
      </div>
      <div>
        <button type = "submit">add</button>
      </div>
    </form>
    <h2>Numbers</h2>
    <ul>
    {people.map(e => <li key = {e.name}>{e.name}</li>)}
    </ul>
    </div>
  )

}

export default App
