const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Showing {props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p> {props.name} {props.exercise} </p>
  )
}

const Content = (props) => {
  console.log(props.parts);   
  console.log(props.parts.length);
  let length = props.parts.length;
  console.log(props.parts[0]);
  console.log(props.parts[0]["exercises"])

  return (
    props.parts.map(part => 
              <p key={part.id}> 
                {part["name"]} {part["exercises"]} 
              </p> 
            )
   )
}

// const Part = (props) => {
//   return (
//     <p> {props.part} {props.exercise} </p>
//   )
// }

const Total = (props) => {
  let length = props.parts.length;
  console.log("Length is: " + length);
  let total = 0;
  for (let i = 0; i < length; i++) {
    console.log(props.parts[i]["exercises"]);
    total = total + props.parts[i]["exercises"];
  }

  return (
    <p>Number of exercises {total}</p>
  )

}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React', 
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of component',
      exercises: 14
    }
  ]

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {parts[0]["name"]} {parts[0]["exercises"]}
      </p>
      <p>
        {parts[1]["name"]} {parts[1]["exercises"]}        
      </p>
      <p>
        {parts[2]["name"]} {parts[2]["exercises"]}        
      </p>
      <p>
        Number of exercises {parts[0]["exercises"]
                           + parts[1]["exercises"]
                           + parts[2]["exercises"]}
      </p>
    </div>
  )
}

export default App