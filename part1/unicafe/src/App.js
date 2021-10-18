import React, {useState} from 'react';
import './index.css';

const Button = ({text, onClick}) => {
  return (
    <button onClick = {onClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <><tr><td colSpan = '2'>{text}</td><td>{value}</td></tr></>
  )
}

const Statistics = (props) => {

  const {good, neutral, bad} = props
  const getTotalNoOfFeedback = () => good + neutral + bad
  const totalNoOfFeedback = getTotalNoOfFeedback()
  const averageFeedback = ((good - bad)/totalNoOfFeedback)>0 ? (good - bad)/totalNoOfFeedback : 0
  const positivePercentage = (good/totalNoOfFeedback) > 0 ? (good/totalNoOfFeedback) * 100 : 0

if(totalNoOfFeedback <= 0){
  return (
    <div>
      <h2>Statistics</h2>
      <p>No Feedback Given</p>
    </div>
  )
}
  return (
    <div>
      <h2>Statistics</h2>
      <table>
      <tbody>
      <StatisticLine text = "Good" value = {good} />
      <StatisticLine text = "Neutral" value = {neutral}/>
      <StatisticLine text = "Bad" value = {bad}/>
      <StatisticLine text = "Total Feedback" value = {totalNoOfFeedback}/>
      <StatisticLine text = "Average" value = {averageFeedback}/>
      <StatisticLine text = "Positive Percentage" value = {`${positivePercentage} %`} />
      </tbody>
      </table>
    </div>
  );

}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

    return (
      <div>
        <h1>Give Feedback</h1>
        <Button text = "Good" onClick = {() => setGood(good + 1)} />
        <Button text = "Neutral" onClick = {() => setNeutral(neutral + 1)} />
        <Button text = "Bad" onClick = {() => setBad(bad + 1)} />
        <Statistics good = {good} neutral = {neutral} bad = {bad} />
      </div>
    );
}

export default App;
