import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Statistics = (props) => {
  console.log(props.val[3])
  if (props.val[3] === 0) {
    return (<></>)
  }

  return (
    <div>  
      <Statistic text={props.text[0]}  val={props.val[0]}/>
      <Statistic text={props.text[1]}  val={props.val[1]}/>
      <Statistic text={props.text[2]}  val={props.val[2]}/>
      <Statistic text={props.text[3]}  val={props.val[3]}/>
      <Statistic text={props.text[4]}  val={props.val[4]}/>
      <Statistic text={props.text[5]}  val={props.val[5]}/>
    </div>
  )
}

const Statistic = (props) => {
  return (
  <p>{props.text} {props.val}</p>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.whenClicked} >{props.text}</button>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0);

  const handleGoodBtnClick = () => {
    setAll(allClicks.concat('G'))
    return setGood(good + 1)
  }

  const handleNeutralBtnClick = () => {
    setAll(allClicks.concat('N'))
    return setNeutral(neutral + 1)

  }

  const handleBadBtnClick = () => {
    setAll(allClicks.concat('B'))
    return setBad(bad + 1)
  }

  // const handleAverage = () => {
  //   let avg = (good * 1 + neutral * 0 + bad * -1) / allClicks
  //   // console.log(good * 1 + neutral * 0 + bad * -1)
  //   console.log(allClicks)
  //   // console.log(avg)
  //   return avg
  // }

  return (
    <div>
      <h1>
        give feedback
      </h1>
      <br />
      <Button whenClicked={handleGoodBtnClick} text="good" />
      <Button whenClicked={handleNeutralBtnClick} text="neutral" />
      <Button whenClicked={handleBadBtnClick} text="bad" />

      <h1>statistics</h1>

      <Statistics text={["good", "neutral", "bad", "all", "average", "positive"]} val={[good, neutral, bad, allClicks.length, average, positive]} />



    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)