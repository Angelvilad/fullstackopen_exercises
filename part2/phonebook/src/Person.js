const Person = ({name, number, id, onDelete:handlerClick}) => {

  return(
    <li>{name} {number} <button onClick={() => handlerClick(id, name)}>delete</button></li>
  )
}

export default Person;