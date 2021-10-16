import React from 'react';
import './index.css';

const Header = ({course}) => <h1>{course.name}</h1>
const Content = ({course}) => {
    const parts = course.parts
    return (
      <div>
        <Part name={parts[0].name} exercises={parts[0].exercises} />
        <Part name={parts[1].name} exercises={parts[1].exercises} />
        <Part name={parts[2].name} exercises={parts[2].exercises} />
      </div>
    )
}
const Total = ({course}) => <p>Number of exercises {course.parts.map(part => part.exercises).reduce((p,c) => p+c)}</p>;
const Part = ({name, exercises}) => <p>{name} {exercises}</p>

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
          name: 'State of a Component',
          exercises: 14
        }
      ]
    }
    return (
      <div>
        <Header course = {course} />
        <Content course = {course} />
        <Total  course = {course} />
      </div>
    );
}

export default App;
