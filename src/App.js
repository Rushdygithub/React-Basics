import React, { useEffect } from "react"
import './App.css';


function App() {
 

  const [status,setStatus] = React.useState(false)

  

  React.useEffect(()=> {
    console.log("Renderd")
  }, [status])
 
  function clickHandler() { 
    setStatus((prev) => !prev)
  }
  

  return (
    <>
      <button onClick={clickHandler}>Click Me</button>
    </>
  );
}

export default App;
