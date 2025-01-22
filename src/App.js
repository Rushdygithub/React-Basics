import React, { useEffect } from "react"
import './App.css';


function App() {
 
  const [status,setStatus] = React.useState(false)
  
  //NOTE:: This will render in every render 
  React.useEffect(()=> {
    console.log("On every componant render!====== 1")
  })
  
  //NOTE:: This will render in first mount/load
  React.useEffect(()=> {
    console.log("On first mount/load componant render!=====2")
  }, [])

  //NOTE:: This will render in first and state chnaged
  React.useEffect(()=> {
    console.log("On first mount/load componant render and dep render!=======3")
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
