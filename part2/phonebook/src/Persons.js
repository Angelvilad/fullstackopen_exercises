import Person from './Person.js';

const Persons = ({persons, filter, onDelete:handlerClick}) => {

  return(
    <div>
      <ul>
      {
        persons
        .filter((person) => {
          if(filter === '') return true;
          return person.name.toLowerCase().includes(filter.toLowerCase());
        })
        .map((person) => <Person key={person.id} id={person.id} name={person.name} number={person.number} onDelete={handlerClick} />)
      }
      </ul>
    </div>
  )
}

export default Persons;