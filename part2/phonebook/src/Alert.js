const Alert = ({message}) => {
  if (message === '') {
    return null;
  }
  
  return(
    <div className="successful">
      <p>{message}</p>
    </div>
  )
}

export default Alert;