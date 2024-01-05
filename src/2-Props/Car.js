import React from 'react'

const Car = ({definition,addition}) => {
  return (
    <div>
        {/* <h2>I am a {props.brand} </h2> */}
        {/* <h2>I am a {props.brand.name} and {props.brand.model}</h2> */}

        {/* <h2>{props.definition.myCar.carName}</h2>
        <h2>{props.definition.person.location}</h2> */}

        <h2>{definition.myCar.carName}</h2>
        <h2>{addition.carName}</h2>

    </div>
  )
}

export default Car

//rafce
//react snippets extension