import React, {useState} from 'react'
import './index.css'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([
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

    setPersons(persons.concat({'id': persons.length + 1, 'name': newName, 'number': newNumber}))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const isNameExist = (name) => persons.find(function(e){
    return e.name === this;
  },name);


  const handleNameFilterChange = (event) => setNameFilter(event.target.value)
  const personsToShow =(nameFilter)
                        ? persons.filter(e => e.name.trim().toLowerCase().startsWith(nameFilter.trim().toLowerCase()))
                        : persons;

  return (
    <div>
    <h2>phonebook</h2>
      <Filter value = {nameFilter} onChange = {handleNameFilterChange} />
    <h2> add a new </h2>
      <PersonForm name = {newName} onNameChange = {handleNameChange} number = {newNumber} onNumberChange = {handleNumberChange} onSubmit = {addPerson} />
    <h2>numbers</h2>
    <ul>
    <Persons persons = {personsToShow} />
    </ul>
    </div>
  )

}

export default App
