import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({statistics}) => {
  const {good, neutral, bad, total, average, positive} = statistics;
  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h2>statistics</h2>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="total" value={total} />
      <Statistic text="average" value={average} />
      <Statistic text="positive" value={positive} />
    </div>
  )
}

const Button = ({textButton, handlerClick}) => {

  return (
    <button onClick={handlerClick} >{textButton}</button>
  )
}

const Statistic = ({text, value}) => {

  return (
    <p>{text} {value}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positive = good / total * 100 || 0;

  const statistics = { good, neutral, bad, total, average, positive };

  const handleClickGood = (event) => {
    console.log('click');
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
      <Button textButton="good" handlerClick={handleClickGood} />
      <Button textButton="neutral" handlerClick={handleClickNeutral} />
      <Button textButton="bad" handlerClick={handleClickBad} />
      <Statistics statistics={statistics}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
