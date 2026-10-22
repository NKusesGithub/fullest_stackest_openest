import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setNewGood = (newGood) => {
    console.log('value now', newGood)
    setGood(newGood)
  }

  const setNewNeutral = (newNeutral) => {
    console.log('neutral now: ', newNeutral)
    setNeutral(newNeutral)
  }

  const setNewBad = (newBad) => {
    console.log('neutral now: ', newBad)
    setBad(newBad)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <p>
        <button onClick={() => setNewGood(good + 1)}>good</button>
        <button onClick={() => setNewNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setNewBad(bad + 1)}>bad</button>
      </p>

      <h1>statistics</h1>

      <p>
       <p>good {good}</p> 
       <p>neutral {neutral}</p>
       <p>bad {bad}</p>
       <p>all {good+neutral+bad}</p>
       <p>average {(good*1 + (bad*(-1)))/(good+neutral+bad)}</p>
       <p>positive {good/(good+neutral+bad) * 100} %</p>
      </p>
    </div>
  )
}

export default App