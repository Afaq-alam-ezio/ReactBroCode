import React from 'react'
import { userContext } from './A'
import { useContext } from 'react'

function B() {

    let {user, user2} = useContext(userContext)
    
    return (
    <div>"Hello {user}"</div>
  )
}

export default B