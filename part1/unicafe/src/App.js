import React, {useState} from 'react';
import './index.css';

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const getTotalNoOfFeedback = () => good + neutral + bad
  const totalNoOfFeedback = getTotalNoOfFeedback()
  const averageFeedback = ((good - bad)/totalNoOfFeedback)>0 ? (good - bad)/totalNoOfFeedback : 0
  const positivePercentage = (good/totalNoOfFeedback) > 0 ? (good/totalNoOfFeedback) * 100 : 0


    return (
      <div>
        <h1>Give Feedback</h1>
        <button onClick = {() => setGood(good + 1)}>Good</button>
        <button onClick = {() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick = {() => setBad(bad + 1)}>Bad</button>
        <h2>Statistics</h2>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>Total Feedback {totalNoOfFeedback}</p>
        <p>Average {averageFeedback}</p>
        <p>Positive Percentage {positivePercentage} %</p>
      </div>
    );
}

export default App;
