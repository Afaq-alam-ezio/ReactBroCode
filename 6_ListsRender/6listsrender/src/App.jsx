import Fruits from "./Fruits"

function App() {

  // Assume, we are passing below lists dynamically
  let customFruits = [

    {id : 1 , name : "Tomato", calories : 95}, 
    {id : 2 , name : "Coconut", calories : 155}, 
    {id : 3 , name : "Sugarcane", calories : 255}, 
    {id : 4 , name : "Strawberry", calories : 395}, 
    {id : 5 , name : "Orange", calories : 35}

    ];

  let customVegetables = [

    {id : 6 , name : "Potato", calories : 395}, 
    {id : 7 , name : "Beans", calories : 15}, 
    {id : 8 , name : "Lentinels", calories : 25}, 
    {id : 9 , name : "Gram", calories : 45}, 
    {id : 10 , name : "Sprout", calories : 78}
    
    ];

  return (

    <>
      
      <div className="customList1">

              <Fruits customList = {customFruits} category = "Exotic Fruits"/>
      </div>
      
  

      <Fruits customList = {customVegetables} category = "Exotic Vegetables"/>
      
      

    </>
  )
}

export default App
