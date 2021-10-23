import React, {useState} from 'react'
import './index.css'

const App = () => {

  const [people, setPeople] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');



  const addPerson = (event) => {
    event.preventDefault()

    if(newName.trim() === ''){
      alert(`Name cannot be empty`); return;
    }
    else if(isNameExist(newName)){
      alert(`${newName} is already added to phonebook`); return;
    }

    setPeople(people.concat({'id': people.length + 1, 'name': newName, 'number': newNumber}))
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


  const handleNameFilterChange = (event) => setNameFilter(event.target.value)
  const peopleToShow =(nameFilter)
                        ? people.filter(e => e.name.trim().toLowerCase().startsWith(nameFilter.trim().toLowerCase()))
                        : people;

  return (
    <div>
    <h2>phonebook</h2>
    <div>
    Filter shown with <input value = {nameFilter} onChange = {handleNameFilterChange} />
    </div>

    <h2> add a new </h2>
    <form onSubmit = {addPerson}>
      <div>
        name : <input value = {newName} onChange = {handleNameChange} />
      </div>
      <div>
        number : <input value = {newNumber} onChange = {handleNumberChange} />
      </div>
      <div>
        <button type = "submit">add</button>
      </div>
    </form>
    <h2>numbers</h2>
    <ul>
    {peopleToShow.map(e => <li key = {e.name}>{e.name} {e.number}</li>)}
    </ul>
    </div>
  )

}

export default App
