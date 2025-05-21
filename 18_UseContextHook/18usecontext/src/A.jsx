import { createContext } from 'react'
import { useState, useContext } from 'react'
import C from './C'
import B from './B'

export let userContext = createContext()

function A() {

    let [user, setUser] = useState("Cello")
    let [user2, setUser2] = useState("Cello")

  return (
    <>

    <userContext.Provider value={{user, user2}}>

        <C />
        <B />
    </userContext.Provider>
    </>
  )
}

export default A