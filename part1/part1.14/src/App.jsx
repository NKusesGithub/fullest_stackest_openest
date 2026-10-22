import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [highestAnecdote, setHighest] = useState(0)


  // Issues faced:
  // 1. wrote down copy = votes instead of let copy = [...votes]
  // 2. spaghetti
  const handleVote = () => {
    console.log("The selected anecdote index is: " + selected)
    console.log("The anecdote's votes is: " + votes[selected])
    let copy = [...votes]
    copy[selected] += 1
    setVotes(copy)

    // copy[selected] shows me the votes for the selected topic.

    if (copy[selected] > copy[highestAnecdote]) {
      console.log("The new highest vote is: " + copy[selected])
      setHighest(selected)
    }
  }

  const onClick = () => {
    let rand = Math.floor(Math.random() * (anecdotes.length))
    setSelected(rand)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes </p>
      
      <button onClick={handleVote}>
        vote
      </button>

      <button onClick={onClick}>
        next anecdote
      </button>


      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[highestAnecdote]}</p>
    </div> 
  ) 
}

export default App