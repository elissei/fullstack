import { useState } from 'react'



const Statistics = ({ all, average, positive, good, neutral, bad}) => {
  console.log(all, average, positive)
  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      good {good}
      <p></p>
      neutral {neutral}
      <p></p>
      bad {bad}
      <p></p>
      all {all}
      <p></p>
      average {average / all}
      <p></p>
      positive {positive / all * 100} %
    </div>
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
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
      </div>
      <h1>statistics</h1>
      <Statistics all={all} average={average} positive={positive} good={good} neutral={neutral} bad={bad} />
      </div>
  )
}

export default App