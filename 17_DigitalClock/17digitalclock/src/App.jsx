import { useEffect, useState } from "react";

function App() {

  let [time, setTime] = useState([])

  let padTime = (number) => {

      return (number >= 10 ? "" : "0") + number
  }

  useEffect(()=>{

    let intervalId = setInterval(() => {
      
      let date = new Date();

      let updatedTime = [padTime(date.getHours()), padTime(date.getMinutes()), padTime(date.getSeconds())]

      setTime(updatedTime)
    }, 1000);

    return() => {

      clearInterval(intervalId)
    }
  }, [])

  return (
    <>
      <div className="time">
        {`${time.join(":")}`}
      </div>
    </>
  )
}

export default App
