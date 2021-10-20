import React from 'react';
import './index.css';


const Part = ({part}) => <li>{part.name} {part.exercises}</li>

const Total = ({course}) => <p>Total of {course.parts.reduce((sum, part) => sum + part.exercises ,0)} exercises</p>

const Content = ({course}) => {
  return (
    <>
      <ul>
        {course.parts.map(p => <Part key={p.id} part={p}/>)}
      </ul>
      <Total course = {course} />
    </>
  )
}
const Header = ({course}) => <h1>{course.name}</h1>

const Course = ({course}) => {
  return (
    <div>
      <Header course = {course} />
      <Content course = {course} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
    ]
  }

  return <Course course={course} />
}

export default App;
