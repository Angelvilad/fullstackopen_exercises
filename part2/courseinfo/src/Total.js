const Total = ({parts}) => {
  
  var total = parts.reduce((accumulator, item) => accumulator + item.exercises, 0);

  return (
    <p>Number of exercises {total}</p>
  )
}

export default Total;