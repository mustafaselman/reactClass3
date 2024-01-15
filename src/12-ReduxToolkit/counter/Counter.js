import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { decrement, increment, incrementByAmount } from './counterSlice'

const Counter = () => {

    //store da tutulan state lere buradan erişiriz
    const count = useSelector((state)=>state.counter.value)

    //reducerları tetikleyen actionsları çalıştırmak için dispatche ihtiyaç var
    const dispatch = useDispatch()

    let amount = 10

  return (
    <div>
        <div style={{fontSize: "100px"}}>{count}</div>
        <button onClick={()=>dispatch(increment())}>Increment(+)</button>
        <button onClick={()=>dispatch(decrement())}>Decrement(-)</button>
        <button onClick={()=>dispatch(incrementByAmount(amount))}>increment by {amount}</button>
    </div>
  )
}

export default Counter