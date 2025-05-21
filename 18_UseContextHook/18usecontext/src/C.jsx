import React from 'react'
import { userContext } from './A'
import { useContext } from 'react'



function C() {

let {user, user2} = useContext(userContext)

return (

    <h1>{user}</h1>
  )
}

export default C