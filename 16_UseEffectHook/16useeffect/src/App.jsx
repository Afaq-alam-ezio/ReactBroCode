import { useEffect, useState } from "react"

function App() {

  let[count, setCount] = useState(0);

  let[color, setColor] = useState("red");

  let handleAdd = () =>{

    setCount(c => c+1)
  }

  let handleReset = () =>{

    setCount(0)
  }

  let handleColor = (c) =>{

      setColor(color === "blue" ? "red":"blue")
  }

  // the code inside could have have been standalone, but using inside useeffect is good 
  // , as it helps to track when the variable is changing according to the variables defined
  // inside dependency array
  useEffect(()=>{

    document.title = `count : = ` + count + ` color : ${color}`
  }, [count, color])
  

  return (
    <>

      <h1 style={{color:color}}>Count : {count}</h1>
      <button onClick={handleAdd}>Add</button>  
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleColor}>Color</button>

    </>
  )
}

export default App
