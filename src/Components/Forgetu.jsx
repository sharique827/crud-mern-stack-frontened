import React, { useContext, useState } from 'react'
import { Context } from '../Store/CreateContextProvider'
import { useNavigate } from 'react-router-dom'

function Forgetu(props) {
    var {forgetusername}=useContext(Context)
    var navigate=useNavigate()
    let [email,setemail]=useState('')
    let [a,seta]=useState(0)
    let [e,sete]=useState(0)
    function getdata(e){
      sete(0)
      setemail(e.target.value)
    }
    async function postdata(){
       var item={
        email:email
       }
       var response=await forgetusername(item)
       if(response.result==="Done"){
        localStorage.setItem('againemail',response.data.email)
        seta(1)
        setTimeout(()=>{
          navigate('/forgeto')
        },1000)
       }
       else
       sete(1)
    }
 
  return (
    <>
    <h2 className='text-light text-center background mt-2 rounded'>Forget Password :</h2>
    <div className='row'>
        <div className='col-md-4 col-12'></div>
        <div className='col-md-4 col-12'>
            {a?<div className='alert alert-success text-center'>Otp Sent To Your Email Id</div>:""}
        <div className="mb-3">
  <label for="exampleInputEmail1" className={props.modes?"form-label text-light":"form-label text-dark"}>Email address <span className='text-danger'>*</span></label>
  <input type="email" onChange={getdata} placeholder='Enter Email ID'  name='email' className="form-control"/>
  {e?<div className='text-danger'>Email Doesnot Exist In Our DataBase</div>:""}
  <button className="btn btn-primary w-100 background mb-2 mt-3" onClick={postdata}>Send OTP</button>
</div>
        </div>
        <div className='col-md-4 col-12'></div>
    </div>
    </>
  )
}

export default Forgetu