import React from 'react'
import MyFormik from './FormikYup/MyFormik'

const Forms = () => {
    // const [name,setName] = React.useState("")

    // const [inputs,setInputs] = React.useState({})

    // const [myCar,setMyCar] = React.useState("Volvo")

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert(`THe name you entered was : ${name}`)
    // }

    // const handleChange = (event) => {
    //     const name = event.target.name
    //     const value = event.target.value
    //     setInputs( values => ({...values, [name]: value}))
    // }
    // const handleSubmit2 = (event) => {
    //     event.preventDefault();
    //     console.log(inputs)
    // }

    // const handleChange2 = (event) => {
    //     setMyCar(event.target.value)
    // }

  return (
    <div>
        {/* <form onSubmit={handleSubmit}>
            <label>
                Enter your name:
                <input 
                type="text"
                value={name}
                onChange={(event)=> setName(event.target.value)}
                />
            </label>
            <input type="submit"/>
        </form> */}
        {/* <form onSubmit={handleSubmit2}>
            <label>
                Enter your name:
            </label>
            <input
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
            />
            <label>Enter your age:</label>
            <input
                type="number"
                name="age"
                value={inputs.age || ""}
                onChange={handleChange}
            />
            <input type="submit"/>
        </form>
        <form>
            <select value={myCar} onChange={handleChange2}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form> */}
        <MyFormik/>
    </div>
  )
}

export default Forms