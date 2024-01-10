import React from 'react'

const Forms = () => {
    const [name,setName] = React.useState("")

    const [inputs,setInputs] = React.useState({})

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert(`THe name you entered was : ${name}`)
    // }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs( values => ({...values, [name]: value}))
    }
    const handleSubmit2 = (event) => {
        event.preventDefault();
        console.log(inputs)
    }
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
        <form onSubmit={handleSubmit2}>
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
    </div>
  )
}

export default Forms