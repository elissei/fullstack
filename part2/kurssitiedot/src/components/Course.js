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

export default Course