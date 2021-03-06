import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {

  const [selected, setselected] = useState(0)
  const [votes, setVotes] = useState(new Array(6).fill(0))
  
  const handleClick = () => {
    console.log(votes)
    return setselected(Math.floor(Math.random() * 5))
  }

  const handleVotes = () => {
    const arr = {...votes}
    arr[selected] += 1
    return setVotes(arr)
  }

  

  return (
    <div>
      {props.anecdotes[selected]}
      <br />
      <br />
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVotes}>Vote</button>
      <button onClick={handleClick}>next anecdote</button>
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
    <App anecdotes={anecdotes}/>,
  document.getElementById('root')
);

