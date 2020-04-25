import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import apiService from './services/helper'
import ReactNotification from 'react-notifications-component'
import toast from './services/notifications'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNum ] = useState('')
  const [ filterName, setFilterName ] = useState('')
  

  useEffect(() => {
    apiService
      .getAll()
      .then(returnedPerson => {
        setPersons(returnedPerson)
      })
    }, [])
  
  const handleChangeName = (e) => {
    setNewName(e.target.value)
  }

  const handleChangeNum = (e) => {
    setNewNum(e.target.value)
  }

  const handleFilter = e => {
    setFilterName(e.target.value)
  }
  const filteredPersons = filterName === '' ? persons : persons && persons.filter(person => (person.name.toLowerCase()).includes(filterName.toLowerCase()));
  // polyfill for sorting on name
  // const compare = (a, b) => {
  //   const nameA = a.name.toUpperCase();
  //   const nameB = b.name.toUpperCase();

  //   let comparison = 0;
  //   if (nameA > nameB) {
  //     comparison = 1;
  //   } else if (nameA < nameB) {
  //     comparison = -1;
  //   }
  //   return comparison;
  // }
  // polyfill for startcase string
  const titleCase = (str) => {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
  //
  const addPerson = e => {
    e.preventDefault();
    const personObject = {
      name: titleCase(newName),
      number: newNumber,  
    }
    apiService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        toast.successfullAdd(personObject.name)
        setNewName('')
        setNewNum('')
      })
      .catch(error => {
        let msg = Object.entries(error.response.data.errors)
        let errmsg = msg[0][1].message
        toast.unique(errmsg)
      })
    
  }
  
  const deletePerson = (details) => {
    if(window.confirm(`Delete ${details.name} ?`)){
      apiService
      .remove(details.id)
      .then(returnedPerson => {
        setPersons( persons.map(person => person.id !== details.id ? person : returnedPerson).filter(person => Object.keys(person).length!==0))
      })
      toast.successfullDeleted(details.name)
    }
  }

  return (
      <>
      <ReactNotification />
      <section>
        <h2>Phonebook~</h2>
        <Filter filterName={filterName} handleFilter={handleFilter} />
        {/* <button onClick={() => filteredPersons.sort(compare)}>sort</button> */}
        <br/>
        <h2>Add a new contact~</h2>
        <PersonForm 
          addPerson={addPerson} 
          newName={newName} 
          newNumber={newNumber} 
          handleChangeName={handleChangeName} 
          handleChangeNum={handleChangeNum} 
        />
        <br/>
        <h2>Names~</h2>
        <Persons filteredPersons={filteredPersons} deletePerson={deletePerson} />
      </section>
      </>
  )
}
export default App