import { useState } from "react"


function App() {

  let [counter, setCounter] = useState(0)

  let Increase = () => setCounter((prev) => prev + 1)

  let Decrease = () => setCounter((prev) => prev - 1)

  let Reset = () => setCounter((prev) => prev = 0)

  return (

   <div className="app-container">
      <h1 className="counter-display">Counter = {counter}</h1>
      <div className="button-container">
        <button className="button increment" onClick={Increase}>
          Increment
        </button>
        <button className="button decrement" onClick={Decrease}>
          Decrement
        </button>
        <button className="button reset" onClick={Reset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
