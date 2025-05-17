import Greeting from "./Greeting"


function App() {

  let name = "Walter";
  let isLoggedIn = true;


  return (
    <>

        <Greeting name = {name} isLoggedIn = {isLoggedIn}/>      

    </>
  )
}

export default App
