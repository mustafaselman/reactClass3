import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import validations from "./validations";



const MyFormik = () => {
    
    const { handleSubmit, handleChange, errors, touched, values, handleBlur } = useFormik(
    {
      initialValues: {
        name: "",
        email: "",
        gender: "",
        hobies: [],
        country: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit: (values, bag) => {
        console.log(values);
        bag.resetForm()
      },
      validationSchema: validations
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <br></br>
      {errors.name && touched.name && <div style={{color:"red"}}>{errors.name}</div>}
      <input
        type="text"
        name="email"
        placeholder="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <br></br>
      {errors.email && touched.email && <div style={{color:"red"}}>{errors.email}</div>}
      <label>Male</label>
      <input type="radio" name="gender" value="male"  checked={values.gender === 'male'} onChange={handleChange} />
      <label>Female</label>
      <input
        type="radio"
        name="gender"
        value="female"
        checked={values.gender === 'female'}
        onChange={handleChange}
      />
      <br></br>
      <label>Football</label>
      <input
        type="checkbox"
        name="hobies"
        value="football"
        checked={values.hobies.includes('football')}
        onChange={handleChange}
      />
      <label>Cinema</label>
      <input
        type="checkbox"
        name="hobies"
        value="cinema"
        checked={values.hobies.includes('cinema')}
        onChange={handleChange}
      />
      <label>Photography</label>
      <input
        type="checkbox"
        name="hobies"
        value="photography"
        checked={values.hobies.includes('photography')}
        onChange={handleChange}
      />
      <br></br>
      <select name="country" onChange={handleChange} value={values.country}>
        <option value="">- Select Country -</option>
        <option value="tr">Turkey</option>
        <option value="en">England</option>
        <option value="usa">USA</option>
      </select>
    <br></br>
    <label>Password</label>
    <br></br>
    {errors.password && touched.password && <div style={{color:"red"}}>{errors.password}</div>}
    <input name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
    <br></br>
    <label>ConfirmPassword</label>
    <br></br>
    {errors.confirmPassword && touched.confirmPassword && <div style={{color:"red"}}>{errors.confirmPassword}</div>}
    <input name="confirmPassword" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur}/>
    <br></br>
    <button type="submit">Kayıt Ol</button>
    <button type="reset" >Reset</button>
    </form>
  );
};

export default MyFormik;
