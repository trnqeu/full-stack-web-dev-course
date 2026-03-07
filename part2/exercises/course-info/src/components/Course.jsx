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

export default Course