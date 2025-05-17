import { useState } from "react"

function App() {
  
  let [cars, setCars] = useState([])

  let [carBrand, setCarBrand] = useState("")

  let [carModel, setCarModel] = useState("")
  
  let [carYear, setCarYear] = useState(new Date().getFullYear())


  let handleBrand = (e) => {

      setCarBrand(e.target.value)
      
  }
  
  let handleModel = (e) => {

      setCarModel(e.target.value)
      
  }
  
  let handleYear = (e) => {

      setCarYear(e.target.value)
      
  }

  let handleAddCar = () => {

      let newCar = {

        "brand" : carBrand,
        "model" : carModel,
        "year" : carYear
      }

      setCars(prevCars => [...prevCars, newCar])

      setCarBrand("")
      setCarModel("")
      setCarYear(new Date().getFullYear())
  }
  

  let removeCar = (car) => {

    setCars(prev => prev.filter((currentCars) => currentCars != car))
  }

  return (

    <>

      <div>

        <h2>Cars List :</h2>
        <ol>{cars.map((car, index) => <li key = {index} onClick={() => removeCar(car)}>{car.brand} {car.model} {car.year}</li>)}</ol>
      </div>


      <div>

        <h2>Select Cars Below :</h2>

        <input type = "text" value = {carBrand} onChange={handleBrand} placeholder="Enter Car Brand"/>
        <input type = "text" value = {carModel} onChange={handleModel} placeholder="Enter Car Model"/>
        <input type = "number" value = {carYear} onChange={handleYear}/>
        <button onClick={handleAddCar}>Add</button>
      </div>

    </>
  )
}

export default App
