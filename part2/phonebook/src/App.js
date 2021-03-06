import './index.css';

import React, {useState, useEffect} from 'react';

import Filter from './Filter.js';
import PersonForm from './PersonForm.js';
import Persons from './Persons.js';
import Alert from './Alert.js';

import personsService from './services/persons.js';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ newFilter, setNewFilter ] = useState('');
  const [alert, setAlert] = useState({message: '', type: ''});

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
        setAlert({message: `Deleted ${name}`, type: 'successful'});
        setTimeout(() => {
          setAlert({message: '', type: ''});
        }, 5000);
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPerson = {name: newName, number: newNumber};

    const isNameDuplicated = persons.some(person => person.name === newName);

    if(isNameDuplicated) {
      const isConfirmedUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);

      if (isConfirmedUpdate) {
        const personToUpdate = persons.find(person => person.name === newPerson.name);

        personsService
          .update(personToUpdate.id, newPerson)
          .then (data => {
            setPersons(prevPersons => prevPersons.map(person => person.id === data.id ? data : person));
            setAlert({message: `Updated ${data.name}`, type:'successful'});
            setTimeout(() => {
              setAlert({message: '', type: ''});
            }, 5000);
          })
          .catch(error => {
            setAlert({
              message: `Information of ${personToUpdate.name} was already been removed from server`,
              type: 'unsuccessful'
            });
            setPersons(prevPerson => prevPerson.filter(person => person.id !== personToUpdate.id));
            setTimeout(() => {
              setAlert({message: '', type: ''});
            }, 5000);
          });
      }
    } else {
      personsService
      .create(newPerson)
      .then(data => {
        setPersons(prevPersons => prevPersons.concat(data));
        setAlert({message: `Aded ${data.name}`, type: 'successful'});
        setTimeout(() => {
          setAlert({message: '', type: ''});
        }, 5000);
        setNewName('');
        setNewNumber('');
      })
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
      <Alert message={alert.message} type={alert.type} />
      <Persons persons={persons} filter={newFilter} onDelete={handleClickDelete}/>
    </div>
  )
}

export default App;
