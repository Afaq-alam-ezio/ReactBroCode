import Student from "./Student"

function App() {

  return (
    <>
      <div className="fullBody">

        <Student name = "Ezio" age = {20}  isStudent = {true ? "Yes":"No"}/>
        <Student name = "Carl" age = {23}  isStudent = {false ? "Yes":"No"}/>
        <Student name = "Brandon" age = {19}  isStudent = {false ? "Yes":"No"}/>
        <Student name = "Reaves" age = {29}  isStudent = {false ? "Yes":"No"}/>

      </div>
      

    </>
  )
}

export default App
