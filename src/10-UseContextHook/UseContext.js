import React, { createContext, useState } from 'react'
import Component1 from './Component1'

export const UserContext = createContext()

const UseContext = () => {
    const [user,setUser] = useState("Ahmet can")
  return (
    <div>

        {/* <h1>{`Hello ${user}`}</h1>
        <Component1 user={user}/> */}


        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}`}</h1>
            <Component1/>
        </UserContext.Provider>
    </div>
  )
}

export default UseContext