import React, { useState } from 'react'

const UseStateHook = () => {

    const [color,setColor] = useState("orange")

    const [car,setCar] = useState({
        brand:"ford",
        model:"mustang",
        year:"1964",
        color:"red"
    })
    const updateColor = () => {
        setCar(previousState => {
            return {...previousState, color:"pink"}
        })
    }

  return (
    <div>
        <h1>My favourite color is {color}</h1>
        <button type="button" onClick={()=>setColor("blue")}>Blue Button</button>
        <h1>It is a {car.color} {car.model} from {car.year}</h1>
        <button type="button" onClick={()=>setCar({...car,year:"1980",model:"doblo"})}>Change Car</button>
        <button type="button" onClick={updateColor}>Update Car Color</button>
    </div>
  )
}

export default UseStateHook