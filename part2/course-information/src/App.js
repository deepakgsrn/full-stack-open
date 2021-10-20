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

const Course = ({courses}) => {
  return (
    <>
    {
      courses.map((course) => {
      return (
        <div key={course.id}>
          <Header course = {course} />
          <Content course = {course} />
        </div>
      )})
    }
    </>

  )

}

const App = () => {
  const courses = [
    {
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
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default App;
