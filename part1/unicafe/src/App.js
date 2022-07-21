import { useState } from 'react'



const Statistics = ({ all, average, positive, good, neutral, bad}) => {
  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <table>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={all} />
      <StatisticsLine text="average" value={average / all} />
      <StatisticsLine text="positive" value={positive / all * 100} text1='%'/>
    </table>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticsLine = ({ text, value, text1 }) => {
  return (
    <tbody>
      <td>{text}</td>
      <td></td>
      <td></td>
      <td>{value} {text1}</td>
    </tbody>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    setAll(all + 1)
    setGood(good + 1)
    setAverage(average + 1)
    setPositive(positive + 1)
  }

  const handleNeutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
    setAverage(average + 0)
  }

  const handleBadClick = () => {
    setAll(all + 1)
    setBad(bad + 1)
    setAverage(average - 1)
  }


  return (  
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
      </div>
      <h1>statistics</h1>
      <Statistics all={all} average={average} positive={positive} good={good} neutral={neutral} bad={bad} />
      </div>
  )
}

export default App