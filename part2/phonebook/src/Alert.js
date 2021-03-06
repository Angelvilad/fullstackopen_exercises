const Alert = ({message, type}) => {
  if (message === '' || (type !== 'successful' && type !== 'unsuccessful')) {
    return null;
  }
  
  return(
    <div className={type}>
      <p>{message}</p>
    </div>
  )
}

export default Alert;