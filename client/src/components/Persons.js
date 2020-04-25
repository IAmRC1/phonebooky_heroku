import React from 'react'

const Persons = (props) => {
  const { filteredPersons, deletePerson } = props;
  return (
    <>
    {filteredPersons.length === 0 && <p>Add names first</p>}
    <table>
      <tbody>
      
      {filteredPersons.length > 0 && filteredPersons.map((person,i) => person.id && 
        <tr key={`${person}-${i}`}>
          <td>{person.name}</td>
          <td>{person.number}</td>
          <td><button onClick={() => deletePerson({id : person.id, name: person.name})}>delete</button></td>
        </tr>)}
      </tbody>
    </table>
    </>
  )
}

export default Persons