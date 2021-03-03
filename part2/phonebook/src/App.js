import React, {useState, useEffect} from 'react';

import Filter from './Filter.js';
import PersonForm from './PersonForm.js';
import Persons from './Persons.js';

import personsService from './services/persons.js';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ newFilter, setNewFilter ] = useState('');

  useEffect(() => {
    personsService
      .getAll()
      .then(data => setPersons(data));
  }, []);
  
  const handleChangeName = (event) => {
    setNewName(event.target.value);
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const handleChangeFilter = (event) => {
    setNewFilter(event.target.value);
  }
  
  const handleClickDelete = (id, name) => {
    const isConfirmedDelete = window.confirm(`Delete ${name}?`);
    if (isConfirmedDelete) {
      personsService
      .remove(id)
      .then(() => {
        setPersons(prevPersons => prevPersons.filter(person => person.id !== id));
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPerson = {name: newName, number: newNumber};

    const isNameDuplicated = persons.some(person => person.name === newName);

    if(!isNameDuplicated) {
      personsService
        .create(newPerson)
        .then(data => {
          setPersons(prevPersons => prevPersons.concat(data));
          setNewName('');
          setNewNumber('');
        })
    } else {
      window.alert(`${newName} is already added to phonebook`);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleChangeFilter} value={newFilter} />
      <h2>Add a new</h2>
      <PersonForm 
        onSubmit={handleSubmit} 
        onChangeName={handleChangeName} valueName={newName}
        onChangeNumber={handleChangeNumber} valueNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={newFilter} onDelete={handleClickDelete}/>
    </div>
  )
}

export default App;
