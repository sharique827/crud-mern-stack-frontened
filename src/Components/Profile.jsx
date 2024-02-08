/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Store/CreateContextProvider'
import { useParams } from 'react-router-dom'
import profile from "../assets/images/noimage.png"

function Profile(props) {
    var {singleget}=useContext(Context)
    var {id}=useParams()
    let [data,setdata]=useState('')
    async function getApi(){
       var item={
        _id:id
       }
       var response=await singleget(item)
       if(response.result==="Done"){
        setdata(response.data)
       }
    }
    useEffect(()=>{
      getApi()
    },[])
  return (
    <>
    <h2 className='text-light text-center background mt-2 rounded'>Profile Page :</h2>
    <div className='row'>
      <div className='col-md-5 col-12'>
        <img src={profile} className='w-100' height="525px"></img>
      </div>
      <div className='col-md-7 col-12'>
        <h4 className='text-light text-center bg-primary mt-2 rounded'>User Details :</h4>
        <div className='table-responsive'>
          <table className='table'>
            <tbody className={props.modes?'text-light':"text-dark"}>
              <tr>
                <th>UserName</th>
                <td>{data.username}</td>
              </tr>
              <tr>
                <th>ID</th>
                <td>{data._id}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{data.name}</td>
              </tr>
              <tr>
                <th>Email ID</th>
                <td>{data.email}</td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <td>{data.phone}</td>
              </tr>
              <tr>
                <th>City</th>
                <td>{data.city}</td>
              </tr>
              <tr>
                <th>State</th>
                <td>{data.state}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile