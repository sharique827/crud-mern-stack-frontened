import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Context} from "../Store/CreateContextProvider"

function Edit(props) {
  var {singleget,edit}=useContext(Context)
  var navigate=useNavigate()
  let [show,setshow]=useState(0)
  var [username,setusername]=useState('')
  var [name,setname]=useState('')
  var [email,setemail]=useState('')
  var [phone,setphone]=useState('')
  var [city,setcity]=useState('')
  var [state,setstate]=useState('')
    var {id}=useParams()
    function getdata(e){
      if(e.target.name==="username")
      setusername(e.target.value)
      if(e.target.name==="name")
      setname(e.target.value)
      if(e.target.name==="email")
      setemail(e.target.value)
      if(e.target.name==="phone")
      setphone(e.target.value)
      if(e.target.name==="city")
      setcity(e.target.value)
      if(e.target.name==="state")
      setstate(e.target.value)
    }
    async function getApi(){
      setshow(0)
       var item={
        _id:id
       }
       var response=await singleget(item)
       if(response.result==="Done"){
          setusername(response.data.username)
          setname(response.data.name)
          setemail(response.data.email)
          setphone(response.data.phone)
          setcity(response.data.city)
          setstate(response.data.state)
       }
       else{
        alert(response.message)
       }
    }
    async function postdata(){
        var value=prompt('Enter The Password To Edit This Details.')
        var item={
          _id:id,
          username:username,
          name:name,
          email:email,
          phone:phone,
          city:city,
          state:state
        }
        var response=await edit(item,value)
        if(response.result==="Done"){
          setshow(!show)
          setTimeout(() => {
            navigate('/')
          }, 1000);
        }
        else
        alert(response.message)
    }
    useEffect(()=>{
      getApi()
    },[])
  return (
    <>
    <h2 className='text-light text-center background mt-2 rounded'>Update Page :</h2>
    <div className='row'>
      <div className='col-md-3 col-12'></div>


      <div className='col-md-6 col-12'>
        {show?<div className='alert alert-success sticky-top text-center'>Updated Successfully..!</div>:""}
      <div className="mb-3">
    <label className={props.modes?"form-label text-light":"form-label text-dark"}>UserName</label>
    <input type="text"  onChange={getdata} value={username}  name='username' className="form-control"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className={props.modes?"form-label text-light":"form-label text-dark"}>Name</label>
    <input type="text"  onChange={getdata} value={name}  name='name' className="form-control"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className={props.modes?"form-label text-light":"form-label text-dark"}>Email address</label>
    <input type="email" onChange={getdata} value={email}   name='email' className="form-control"/>
  </div>
  <div className="mb-3">
    <label className={props.modes?"form-label text-light":"form-label text-dark"}>Phone Number</label>
    <input type="text"  onChange={getdata} value={phone}  name='phone' className="form-control"/>
  </div>
  <div className="mb-3">
    <label className={props.modes?"form-label text-light":"form-label text-dark"}>City</label>
    <input type="text"  onChange={getdata} value={city}  name='city' className="form-control"/>
  </div>
  <div className="mb-3">
    <label className={props.modes?"form-label text-light":"form-label text-dark"}>State</label>
    <input type="text"  onChange={getdata} value={state}  name='state' className="form-control"/>
  </div>
  <button className="btn btn-primary w-100 background mb-2" onClick={postdata}>Update</button>
      </div>


      <div className='col-md-3 col-12'></div>
    </div>
    </>
  )
}

export default Edit