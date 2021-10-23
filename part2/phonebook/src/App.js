import React, {useState} from 'react'
import './index.css'

const App = () => {

  const [people, setPeople] = useState([
    {'name': 'Arto Hellas', 'number':'9090909090'},
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');



  const addPerson = (event) => {
    event.preventDefault()

    if(newName.trim() === ''){
      alert(`Name cannot be empty`); return;
    }
    else if(isNameExist(newName)){
      alert(`${newName} is already added to phonebook`); return;
    }

    setPeople(people.concat({'name': newName, 'number': newNumber}))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const isNameExist = (name) => people.find(function(e){
    return e.name === this;
  },name);

  return (
    <div>
    <h2>Phonebook</h2>
    <form onSubmit = {addPerson}>
      <div>
        Name : <input value = {newName} onChange = {handleNameChange} />
      </div>
      <div>
        Number : <input value = {newNumber} onChange = {handleNumberChange} />
      </div>
      <div>
        <button type = "submit">add</button>
      </div>
    </form>
    <h2>Numbers</h2>
    <ul>
    {people.map(e => <li key = {e.name}>{e.name} {e.number}</li>)}
    </ul>
    </div>
  )

}

export default App
