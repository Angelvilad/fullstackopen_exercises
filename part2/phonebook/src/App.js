import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Filter from './Filter.js';
import PersonForm from './PersonForm.js';
import Persons from './Persons.js';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ newFilter, setNewFilter ] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      const {data} = response;
      setPersons(data);
    })
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
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const newPerson = {name: newName, number: newNumber};

    const isNameDuplicated = persons.some(person => person.name === newName);

    if(!isNameDuplicated) {
      axios.post('http://localhost:3001/persons', newPerson)
      .then(response => {
        const {data} = response;
        setPersons(prevPersons => prevPersons.concat(data));
        setNewName('');
        setNewNumber('');
      });
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
      <Persons persons={persons} filter={newFilter} />
    </div>
  )
}

export default App;
