import React from 'react'
import Component2 from './Component2'

const Component1 = ({user}) => {
  return (
    <div>
        <h1>component1</h1>
        {/* <Component2 user={user}/> */}
        <Component2/>
    </div>
  )
}

export default Component1