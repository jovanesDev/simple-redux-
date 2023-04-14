import React from 'react'
import { useSelector } from 'react-redux'

const UserData = () => {

    const {name,userName,password}  = useSelector(state => state.user)

  return (
    <div>
        <h1>{name}</h1>
        <h1>{userName}</h1>
        <h1>{password}</h1>
    </div>
  )
}

export default UserData