import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Store/CreateContextProvider'

function Search(props) {
    var {searching,singleget}=useContext(Context)
    var [data,setdata]=useState([])
    let [extra,setextra]=useState(false)
    let [num,setnum]=useState('')
    var {value}=useParams()

    async function getdata(){
        setextra(false)
        var item={
            search:value
        }
        var response=await searching(item)
        if(response.result==="Done")
        setdata(response.data)
        else
        alert(response.message)
    }
    useEffect(()=>{
      getdata()
    },[value])
    async function fulldata(val){
         setextra(true)
         var item={
            _id:val
         }
         var response=await singleget(item)
         if(response.result==="Done"){
           setnum(response.data)
         }
         else{
            alert(response.message)
         }
    }
  return (
    <>
    <div className='row'>
        <div className='col-md-1 col-1'></div>
        <div className='col-md-10 col-10'>
           <div className='table-responsive'>
           {extra?<div className='table-responsive'>
            <table className={props.modes?"table text-light":"table text-dark"}>
            <tr>
                <th>ID</th>
                <td>{num._id}</td>
            </tr>
            <tr>
                <th>UserName</th>
                <td>{num.username}</td>
            </tr>
            <tr>
                <th>Name</th>
                <td>{num.name}</td>
            </tr>
            <tr>
                <th>Email ID</th>
                <td>{num.email}</td>
            </tr>
            <tr>
                <th>Phone Number</th>
                <td>{num.phone}</td>
            </tr>
            <tr>
                <th>City</th>
                <td>{num.city}</td>
            </tr>
            <tr>
                <th>State</th>
                <td>{num.state}</td>
            </tr>
           </table>
           </div>:
           <table className={props.modes?"table text-light":"table text-dark"}>
           <tbody>
               <tr>
                   <th>ID</th>
                   <th>UserName</th>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Phone Number</th>
                   <th>City</th>
                   <th>State</th>
               </tr>
               {
                data.length!==0?data.map((item,index)=>{
                   return <tr key={index} onClick={()=>fulldata(item._id)}>
                       <td>{item._id}</td>
                       <td>{item.username}</td>
                       <td>{item.name}</td>
                       <td>{item.email}</td>
                       <td>{item.phone}</td>
                       <td>{item.city}</td>
                       <td>{item.state}</td>
                   </tr>
                }):<h4 className='text-center text-danger mt-5 side'>No Items Found</h4>
               }
           </tbody>
   </table>}
           </div>
        </div>
        <div className='col-md-1 col-1'></div>
    </div>
    </>
  )
}

export default Search