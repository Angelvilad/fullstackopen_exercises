import Person from './Person.js';

const Persons = ({persons, filter}) => {

  return(
    <div>
      <ul>
      {
        persons
        .filter((person) => {
          if(filter === '') return true;
          return person.name.toLowerCase().includes(filter.toLowerCase());
        })
        .map((person) => <Person key={person.name} name={person.name} number={person.number} />)
      }
      </ul>
    </div>
  )
}

export default Persons;