import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <p>{props.course}</p>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.part[0].name} exercises={props.part[0].exercises} />
      <Part part={props.part[1].name} exercises={props.part[1].exercises} />
      <Part part={props.part[2].name} exercises={props.part[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  console.log(props.part)
  return (
    <p>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />

      <Content part={course.parts} />

      <Total part={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))