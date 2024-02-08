import React, { useContext, useState } from 'react'
import { Context } from '../Store/CreateContextProvider'
import { Link, useNavigate } from 'react-router-dom'

function Login(props) {
    var {login}=useContext(Context)
    let [e,sete]=useState(0)
    let [p,setp]=useState(0)
    let [a,seta]=useState(1)
    var navigate=useNavigate()
    let [email,setemail]=useState('')
    let [password,setpassword]=useState('')
    function chang(){
        seta(!a)
      }
      function getdata(e){
        if(e.target.name==="email"){
            sete(0)
        setemail(e.target.value)}
        if(e.target.name==="password"){
            setp(0)
        setpassword(e.target.value)}
      }
      async function postdata(){
          var item={
            email:email,
            password:password
          }
          var response=await login(item)
          if(response.result==="Done"){
             localStorage.setItem('login',true)
             localStorage.setItem('username',response.data.username)
             localStorage.setItem('email',response.data.email)
             localStorage.setItem('token',response.token)
             localStorage.setItem('id',response.data._id)  
            navigate(`/profile/${response.data._id}`)
          }
          else{
            if(response.message.includes("Email")){
               sete(1)
            }
            else{
               setp(1)
            }
          }
      }
  return (
   <>
   <h2 className='text-light text-center background mt-2 rounded'>Login Page :</h2>
   <div className='row'>
    <div className='col-md-3 col-12'></div>
    <div className='col-md-6 col-12'>
    <div className="mb-3">
  <label for="exampleInputEmail1" className={props.modes?"form-label text-light":"form-label text-dark"}>Email address <span className='text-danger'>*</span></label>
  <input type="email" onChange={getdata} placeholder='Enter Email ID'  name='email' className="form-control"/>
  {e?<div className='text-danger'>Email Doesnot Exist In Our DataBase</div>:""}
</div>
<div className="mb-3">
  <label for="exampleInputEmail1" className={props.modes?"form-label text-light":"form-label text-dark"}>Password <span className='text-danger'>*</span></label>
  <input type={a?"password":"text"} onChange={getdata} placeholder='Enter Password'  name='password' className="form-control"/>
</div>
{p?<div className='text-danger'>Password Is Incorrect</div>:""}
<div class="mb-3 form-check">
    <input type="checkbox" onClick={chang} className="form-check-input" id="exampleCheck1"/>
    <label className={props.modes?"form-check-label text-light":"form-check-label text-dark"} for="exampleCheck1">Show Password</label>
  </div>
  <button className="btn btn-primary w-100 background mb-2" onClick={postdata}>Login</button>
  <div className='d-flex justify-content-between'>
    <Link className='text-primary under' to="/forgetu">Forget Password</Link>
    <Link className='text-primary under' to="/add">New User? Sign In</Link>
  </div>
    </div>
    <div className='col-md-3 col-12'></div>
   </div>
   </>
  )
}

export default Login