import { useState } from "react"


function App() {

  let [name, setName] = useState("")
  let [quantity, setQuantity] = useState(0)
  let [comment, setComment] = useState("")
  let [payment, setPayment] = useState("COD")
  let [delivery, setDelivery] = useState("")

  let nameHandler = (e) => setName(e.target.value)
  let quantityHandler = (e) => setQuantity(e.target.value)
  let commentHandler = (e) => setComment(e.target.value)
  let paymentHandler = (e) => setPayment(e.target.value)



  return (
    <>

      <div>

        <input type="text" placeholder = "Enter name" onChange={(e) => nameHandler(e)}/>
        <pre>Name is : {name}</pre>
      </div>
      

      <div>

        <input type="number" value={quantity} onChange={(e)=>quantityHandler(e)}/>
        <pre>Quantity selected is : {quantity}</pre>
      </div>

      <div>

        <textarea placeholder="Enter comments" onChange={(e) => commentHandler(e)}/>
          <pre>Comment is : {comment}</pre>
      </div>

      <div>

        <select onChange={(e) => paymentHandler(e)}>
    
          <option value="COD">COD</option>
          <option value="Visa">Visa</option>
          <option value="Credit Card">Credit Card</option>
          <option value="EMI">EMI</option>         
          <option value="Net Banking">Net Banking</option>
        </select>

        <pre>Payment Gateway : {payment}</pre>
      </div>


      <div>

          <label>
            
            <input type="radio" checked = {delivery === "PickUp"} value = "PickUp" onChange = {(e) => setDelivery(e.target.value)}/>
              PickUp
          </label>     
          <br/>
          <label>
            
            <input type="radio" checked = {delivery === "Delivery"} value = "Delivery" onChange = {(e) => setDelivery(e.target.value)}/>
              Delivery
          </label>

          <pre>Delivery : {delivery}</pre>
      </div>
    </>
  )
}

export default App
