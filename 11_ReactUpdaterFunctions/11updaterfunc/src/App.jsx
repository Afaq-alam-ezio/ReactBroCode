import React, { useState } from "react"

/* The thing updater function does is that : when we do like => " setCounter(count + 1) " X Almost as many times, it does't actually
    update the count varibale that many times as we have written , for example if we wrote => 
      
          let Increase = () => setCounter(counter + 1)    it will internally look like : 0 + 1, still count = 1
          let Increase = () => setCounter(counter + 1)    it will internally look like : 0 + 1, still count = 1
          let Increase = () => setCounter(counter + 1)    it will internally look like : 0 + 1, still count = 1
          
        **  As React send similar tasks as batches for Performance reasons **
          
        thus to perform this we need "updater functions" which is used like : 

        let Increase = () => setCounter(

                    (prev) => prev + 1      it will internally look like : 0 + 1, now count is updated to 1
                    (prev) => prev + 1      it will internally look like : 1 + 1, now count is updated to 2
                    (prev) => prev + 1      it will internally look like : 2 + 1, now count is updated to 3

                  )

        
            ** prev is just the parameter arg. passed as default in " Updater functions " which stores the latest 
            previous state of the variable
        
        
            **  this is beacause React will send these functions in the priority queue independently just after the
            execution of the each statement line **
                                    
                                                                
                            */
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
