import React, { useEffect, useState } from 'react'
import {Link, useParams, useLocation} from "react-router-dom"

const ContactDetail = () => {
    const {id} = useParams()
    const location = useLocation()
    // const [user,setUser] = useState(null)
    const [user,setUser] = useState(location.state[Number(id)-1])
    // useEffect(()=>{
    //     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    //         .then((res)=>res.json())
    //         .then(data=>setUser(data))
    // },[id])
    useEffect(()=>{
        setUser(location.state[Number(id)-1])
    },[location.state,id])
  return (
    <div>
        <h2>User Detail</h2>
        {
            user && (
                <>
                <pre>{JSON.stringify(user,null,2)}</pre>
                <p>{user.email}</p>
                </>
            )
        }
        {/* <Link to={`/contact/${Number(id)-1}`}>Önceki Kullanıcı</Link>
        &emsp;
        <Link to={`/contact/${Number(id)+1}`}>Sonraki Kullanıcı</Link> */}

        <Link to={`/contact/${Number(id)-1}`} state={location.state}>Önceki Kullanıcı</Link>
        &emsp;
        <Link to={`/contact/${Number(id)+1}`} state={location.state}>Sonraki Kullanıcı</Link>
    </div>
  )
}

export default ContactDetail