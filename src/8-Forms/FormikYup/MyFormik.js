import React from 'react'
import { useFormik } from "formik"

const MyFormik = () => {

    const {handleSubmit,handleChange,errors,touched,handleBlur} = useFormik({
        initialValues: {
            name: "",
            email:"",
            gender:"",
            hobies:[],
            country:"",
            password:"",
            confirmPassword:""
        },
        onSubmit: (values,bag) => {
            console.log(values)
            bag.resetForm();
        }
    })

  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
            onBlur={handleBlur}
        />
        <br></br>
        <input
            type="text"
            name="email"
            placeholder="email"
            onChange={handleChange}
            onBlur={handleBlur}
        />
        <label>Male</label>
        <input type="radio" name='gender' value="male" onChange={handleChange}/>
        <label>Female</label>
        <input type="radio" name="gender" value="female" onChange={handleChange}/>
        <br></br>
        

    </form>
  )
}

export default MyFormik