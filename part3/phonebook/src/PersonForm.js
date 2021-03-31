const PersonForm = ({
  onSubmit,
  onChangeName, valueName,
  onChangeNumber, valueNumber,
}) => {
  
  return (
    <form onSubmit={onSubmit}>
      <div>
        <div>name: <input onChange={onChangeName} value={valueName}/></div>
        <div>number: <input onChange={onChangeNumber} value={valueNumber}/></div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm;