import { useState } from 'react'

const Statistics = (props) => {
  let good = props.good
  let bad = props.bad
  let neutral = props.neutral

  let all = good + bad + neutral
  let avg = (good - bad) / all 
  let positive = good / (all) * 100

  if (all != 0) {
    return (
      <div>
        <h1>statistics</h1>

          <p>good {good}</p>
          <p>bad {bad}</p>
          <p>neutral {neutral}</p>
          
      </div>
    )
  }

  else {
    return (
      <div>
        <h1>no statistics yet</h1>
      </div>
    ) 
  }
}

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

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App