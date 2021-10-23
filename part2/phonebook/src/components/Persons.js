import React from 'react'


const Persons = ({persons}) => {
  return (
    persons.map(e => <Person key = {e.name} name = {e.name} number ={e.number}/>)
  )
}

const Person = ({name, number}) => <li>{name} {number}</li>


export default Persons
