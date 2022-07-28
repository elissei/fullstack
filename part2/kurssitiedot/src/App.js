const Course = ({ course }) => {
  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ course }) => 
    <div>
      <h2>{course}</h2>
    </div>
  
const Content = ({ parts }) => {
  return(
    <>
      {parts.map(part =>
        <Part key={part.id}
          part={part} />
        )}
    </>
  )
} 
    
const Part = ({ part }) => 
    <p>
      {part.name} {part.exercises}
    </p>  


const Total = ({ parts }) => {
  const exs = parts.reduce((a, b) => a + b.exercises, 0) 
  return(
    <div>
      <h3>Total of {exs} exercises</h3>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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

  return (
    <div>
      <h1>Web development curriculum</h1>
      <></>
      {courses.map(course =>
        <Course key={course.id} course={course} />
        )}
    </div>
  )
}

export default App



