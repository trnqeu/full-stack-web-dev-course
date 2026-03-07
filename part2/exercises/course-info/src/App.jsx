import { useState } from 'react'

const Header = (props) => <h1>{props.course}</h1>

const Content = ({ parts }) => {

  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}

    </div>


  )
}


const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = ({ total }) => {
  return (
    <b>total of {total} exercises</b>
  )
}


const Course = ({ course }) => {
  const total = course.parts.reduce((sum, part) => {
    console.log('What is happening', sum, part)
    return sum + part.exercises
  }, 0)
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  )
}

const App = () => {
  const courses = [{
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

  return (courses.map(course => {
    return (
      <div>
        <Course key={course.id} course={course} />
      </div>
    )

  }))
}

export default App
