import React, {useState} from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ newFilter, setNewFilter ] = useState('');

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
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('');
    } else {
      window.alert(`${newName} is already added to phonebook`);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with<input onChange={handleChangeFilter} value={newFilter}/></div>
      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>name: <input onChange={handleChangeName} value={newName}/></div>
          <div>number: <input onChange={handleChangeNumber} value={newNumber}/></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
      <div>
        <ul>
        {
          persons
          .filter((person) => {
            if(newFilter === '') return true;
            return person.name.toLowerCase().includes(newFilter.toLowerCase());
          })
          .map((person) => <li key={person.name}>{person.name} {person.number}</li>)
        }
        </ul>
      </div>
    </div>
  )
}

export default App;
