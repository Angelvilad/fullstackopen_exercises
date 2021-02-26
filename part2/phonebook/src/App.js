import React, {useState} from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) ;
  const [ newName, setNewName ] = useState('');

  const handleChange = (event) => {
    setNewName(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const newPerson = {name: newName};

    const isNameDuplicated = persons.some(person => person.name === newName);

    if(!isNameDuplicated) {
      setPersons(persons.concat(newPerson));
      setNewName('');
    } else {
      window.alert(`${newName} is already added to phonebook`);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={newName}/>
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
          persons.map((person) => <li key={person.name}>{person.name}</li>)
        }
        </ul>
      </div>
    </div>
  )
}

export default App;
