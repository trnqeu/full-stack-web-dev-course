import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good / total * 100

  return (
    <div>
      <h1>statistics</h1>
      <p>good: {good}</p>

      <p>neutral: {neutral}</p>

      <p>bad: {bad}</p>

      <p>all: {total}</p>

      <p>average: {average}</p>

      <p>positive: {positive} % </p>

    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <Statistics good={good} bad={bad} neutral={neutral} />


    </div>
  )
}

export default App