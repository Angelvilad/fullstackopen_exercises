import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positive = good / total * 100 || 0;

  const handleClickGood = (event) => {
    setGood(good + 1);
  }
  const handleClickNeutral = (event) => {
    setNeutral(neutral + 1);
  }
  const handleClickBad = (event) => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)