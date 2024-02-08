import React, { useContext, useState } from 'react'
import { Context } from '../Store/CreateContextProvider'
import { useNavigate } from 'react-router-dom'
function Forgetp(props) {
  var navigate=useNavigate()
  var {forgetpass}=useContext(Context)
  let [password,setpassword]=useState('')
  let [cpassword,setcpassword]=useState('')
  let [a,seta]=useState(0)
  let [e,sete]=useState(0)
  function getdata(e){
     if(e.target.name==="password"){
      setpassword(e.target.value)
     }
     if(e.target.name==="cpassword"){
      sete(0)
      setcpassword(e.target.value)
     }
  }
  async function postdata(){
     if(password!==cpassword){
      sete(1)
     }
     else{
      var item={
        email:localStorage.getItem('againemail'),
        password:password
      }
        var response=await forgetpass(item)
        if(response.result==="Done"){
          seta(1)
          setTimeout(() => {
            navigate('/login')
          }, 1000);
        }
        else{
          alert(response.message)
        }
     }
  }
  return (
   <>
    <h2 className='text-light text-center background mt-2 rounded'>Forget Password :</h2>
    <div className='row'>
        <div className='col-md-4 col-12'></div>
        <div className='col-md-4 col-12'>
            {a?<div className='alert alert-success text-center'>Password Changed Successfully</div>:""}
        <div className="mb-3">
  <label for="exampleInputEmail1" className={props.modes?"form-label text-light":"form-label text-dark"}>Enter New Password<span className='text-danger'>*</span></label>
  <input type="password" onChange={getdata} placeholder='Enter Password'  name='password' className="form-control"/>
</div>
<div className="mb-3">
  <label for="exampleInputEmail1" className={props.modes?"form-label text-light":"form-label text-dark"}>Confirm New Password<span className='text-danger'>*</span></label>
  <input type="password" onChange={getdata} placeholder='Rewrite The Password'  name='cpassword' className="form-control"/>
  {e?<div className='text-danger'>Confirm Password DoesNot Matches To Password</div>:""}
  <button className="btn btn-primary w-100 background mb-2 mt-3" onClick={postdata}>Change Password</button>
</div>
        </div>
        <div className='col-md-4 col-12'></div>
    </div>
   </>
  )
}

export default Forgetp