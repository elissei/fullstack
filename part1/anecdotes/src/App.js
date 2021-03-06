import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  
  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const handleRandomClick = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  const handleVotes = () => {
    const copy = [...votes]
    console.log(copy)
    copy[selected] += 1
    console.log(selected)
    setVotes(copy)
    console.log((Math.max(...votes)))
    console.log(votes.indexOf(Math.max(...votes)))
  }
 
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p></p>
        has {votes[selected]} votes
      <p></p>
      <Button handleClick={handleVotes} text='vote' />
      <Button handleClick={handleRandomClick} text='next anecdote' />
      <h2>Anecdote with most votes</h2>
      {anecdotes[votes.indexOf(Math.max(...votes))]}
      <p></p>
      has {Math.max(...votes)} votes
    </div>
  )
}

export default App
