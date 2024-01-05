import React from 'react'
import Goal from './Goal'
import Garage from './Garage'

const Conditionals = () => {
    const cars = undefined
  return (
    <div>
        {/* <Goal isGoal={false}/> */}
        <Garage cars={cars}/>
    </div>
  )
}

export default Conditionals