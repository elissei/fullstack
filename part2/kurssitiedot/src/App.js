const Course = ({ course }) =>
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>

const Header = ({ course }) => 
    <div>
      <h1>{course}</h1>
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


const Total = ({ sum }) => 
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  

const App = () => {
  const course = {
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

  return (
    <div>    
      <Course course={course} />
    </div>
  )
}

export default App



