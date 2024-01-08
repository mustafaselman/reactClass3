import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)

    // useEffect(()=>{
    //     setTimeout(()=> {
    //         setCount(count=>count+1)
    //     },1000)
    // })
    //useEffectin bu şekilde kullanımı ilk seferinde bir kere çalıştır, sonrasında her render da tekrar çalıştır şeklindedir.

    // useEffect(()=>{
    //     setTimeout(()=> {
    //         setCount(count=>count+1)
    //     },1000)
    // },[])
    //useEffect bu şekilde bir defa çalışır

    // useEffect(()=>{
    //     setTimeout(()=> {
    //         setCount2(count=>count+1)
    //     },1000)
    // },[count])
    //bir bağımlılığa göre render eden useEffect.(bir kere her türlü çalışır.devamında bağımlılık değiştikçe çalışır)

    useEffect(()=>{
        setInterval(()=>{
            setCount(count=>count+1)
        },1000)
    },[count])
    useEffect(()=>{
        let timer = setInterval(()=>{
            setCount2(count=>count+1)
        },1000)
        return () => clearInterval(timer)
    },[count2])

  return (
    <div>
        <h1>I have rendered {count} times </h1>
        <h1>I have rendered {count2} times </h1>
    </div>
  )
}

export default UseEffectHook