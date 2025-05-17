import React, { useState } from "react"


function App() {

  let [food, setFood] = useState(["Apple", "Orange", "Banana"])

  let handleAddFood = (e) => {

      let newFood = document.getElementById("foodInputAdd").value
      setFood([...food, newFood])
      document.getElementById("foodInputAdd").value = ""

  }

  let handleRemoveFood = (e) => {

      let removeFood = document.getElementById("foodInputRemove").value
      setFood((prev) => prev.filter((food) => food !== removeFood))
      document.getElementById("foodInputRemove").value = ""
  }

  let ClickRemove = (food) =>{

      setFood(prev => prev.filter((foods) => foods !== food))
  }

  return (
    <>
      
      <h1>Food Available :</h1>
    
      <ol>{food.map((food, index) => <li key = {index} onClick={() => ClickRemove(food)}>{food}</li>)}</ol>


      <div>

        <h3>Add Food Below :</h3>
        <input type="text" id="foodInputAdd"/>
        <button onClick={handleAddFood}>Add</button>
      </div>


      <div>

        <h3>Remove Food Below :</h3>
        <input type="text" id="foodInputRemove"/>
        <button onClick={handleRemoveFood}>Remove</button>
      </div>
      
      

    </>
  )
}

export default App
