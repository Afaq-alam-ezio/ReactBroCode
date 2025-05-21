import { useEffect, useRef, useState } from "react"


function App() {

  // let [count, setCount] = useState(0); everytime the component Re-renders due to useEffect

  let countRef = useRef(0)

  let inputRef1 = useRef(null)
  let inputRef2 = useRef(null)
  let inputRef3 = useRef(null)



  useEffect(()=>{

    console.log("Re-rendered");
  })

  let handle1 = () => {

    // countRef.current++;
    // console.log(countRef.current);
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "green";
    inputRef2.current.style.backgroundColor = "grey";
    inputRef3.current.style.backgroundColor = "grey";
    
    
  } 
  
  let handle2 = () => {

    // countRef.current++;
    // console.log(countRef.current);
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "grey";
    inputRef2.current.style.backgroundColor = "green";
    inputRef3.current.style.backgroundColor = "grey";
    
    
  } 
  
  let handle3 = () => {

    // countRef.current++;
    // console.log(countRef.current);
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "grey";
    inputRef2.current.style.backgroundColor = "grey";
    inputRef3.current.style.backgroundColor = "green";
    
    
  }

  return (
    <>
      {/* <h3>Count is : {count}</h3> */}

      {/* below , "countRef.current" value is incrementing, */}
      {/* but not visible because useRef() doesnt re-renders the DOM, thus new info is not loaded*/}
      
      <h3>Count is : {countRef.current}</h3>
      
      <button onClick={handle1}>Click</button>
      <input type="text" ref={inputRef1}/>
      <br/>

      <button onClick={handle2}>Click</button>
      <input type="text" ref={inputRef2}/>
      <br/>

      <button onClick={handle3}>Click</button>
      <input type="text" ref={inputRef3}/>
    </>
  )
}

export default App
