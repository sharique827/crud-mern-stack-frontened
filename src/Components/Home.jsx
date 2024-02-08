import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Store/CreateContextProvider'
import Card from './Card'
import { Navigate, useNavigate } from 'react-router-dom'
function Home(props) {
    const navigate=useNavigate()
    var {getall}=useContext(Context)
    var [data,setdata]=useState([])
    async function getdata(){
        var response=await getall()
        console.log('response', response)
        if(response.result==="Done")
        {
            setdata(response.data)
            console.log(response)
        }
        else{
            alert(response.message)
            if(response.message.includes('Access Denied'))
            navigate('/login')
        }
    }
    useEffect(()=>{
        getdata()
    },[])
  return (
    <>
    <h2 className='text-light text-center background mt-2 rounded'>Home Page :</h2>
    <div className='row'>
    {
        data.map((item,index)=>{
            return <Card
            modes={props.modes}
            key={index}
            name={item.name}
            username={item.username}
            email={item.email}
            phone={item.phone}
            city={item.city}
            state={item.state}
            _id={item._id}
            date={item.date}
            />
        })
     }
    </div>
    </>
  )
}

export default Home