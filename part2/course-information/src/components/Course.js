import React from 'react';

const Header = ({course}) => <h1>{course.name}</h1>
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
const Part = ({part}) => <li>{part.name} {part.exercises}</li>
const Total = ({course}) => <p>Total of {course.parts.reduce((sum, part) => sum + part.exercises ,0)} exercises</p>

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

export default Course;
