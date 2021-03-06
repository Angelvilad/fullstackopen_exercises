import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0});
  
  const retrieveMostVotedKey = () => {
    let mostVotedKey=0;
    for (let key in vote) {
      if (vote[key] > vote[mostVotedKey]) mostVotedKey = key;
    }
    return mostVotedKey;
  }

  const mostVotedKey = retrieveMostVotedKey();

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * 6);
    setSelected(randomIndex);
  }

  const handleVote = () => {
    const newVoteState = {...vote};
    newVoteState[selected] += 1;
    setVote(newVoteState);
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <div>
        <p>has {vote[selected]} votes</p>
        <button onClick={handleVote}>
          vote
        </button>
        <button onClick={handleNextAnecdote}>
          next anecdote
        </button>
        <div>
          <h2>Anecdote with most votes</h2>
          <p>{ vote[mostVotedKey] > 0 ? props.anecdotes[mostVotedKey] : 'no votes yet' } </p>
        </div>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)