import React from 'react'
import "./CSSStyling.css"
import styles from "./CSSStyling.module.css"
import Example from './Example/Example'
import Example2 from './Example/Example2'
import ExampleModule from './ExampleModule/ExampleModule'
import ExampleModule2 from './ExampleModule/ExampleModule2'

const CSSStyling = () => {
  const myStyle = {
    color: "white",
    backgroundColor:"black"
  }
  return (
    <div>
      <h1 style={{color:"red"}}>Hello style</h1>
      <h1 style={{backgroundColor:"yellow"}}>hello style2</h1>
      <h1 style={myStyle}>hello style 3</h1>
      <h1 className={styles.bigblue}>module css example</h1>
      <Example/>
      <Example2/>
      <ExampleModule/>
      <ExampleModule2/>
    </div>
  )
}

export default CSSStyling