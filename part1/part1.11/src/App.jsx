import { useState } from 'react'

const Button = ({text, onClick}) => (
  <button onClick={onClick}> {text} </button>
)

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

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
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={avg} />
            <StatisticLine text="positive" value={positive + "%"} />
          </tbody>
        </table>
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

      <div>
        <Button text="good" onClick={() => setNewGood(good + 1)} />
        <Button text="neutral" onClick={() => setNewNeutral(neutral + 1)}/>
        <Button text="bad" onClick={() => setNewBad(bad + 1)} />
      </div>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App