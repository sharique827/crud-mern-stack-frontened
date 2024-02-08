import React, { useContext, useState } from 'react'
import { Context } from '../Store/CreateContextProvider'
import { useNavigate } from 'react-router-dom'
function Forgeto(props) {
  var navigate=useNavigate()
  var {forgetnumber}=useContext(Context)
  let [otp,setotp]=useState('')
  let [a,seta]=useState(0)
    let [e,sete]=useState(0)
  function getdata(e){
    sete(0)
     setotp(e.target.value)
  }
  async function postdata(){
    var item={
      email:localStorage.getItem('againemail'),
      otp:Number(otp)
    }
      var response=await forgetnumber(item)
      if(response.result==="Done"){
        seta(1)
           setTimeout(() => {
            navigate('/forgetp')
           }, 1000);
      }
      else{
        sete(1)
      }
  }
  return (
    <>
    <h2 className='text-light text-center background mt-2 rounded'>Forget Password :</h2>
    <div className='row'>
      <div className='col-md-4 col-12'></div>
      <div className='col-md-4 col-12'>
      {a?<div className='alert alert-success text-center'>Verified</div>:""}
      <div className="mb-3">
  <label className={props.modes?"form-label text-light":"form-label text-dark"}>Enter OTP<span className='text-danger'>*</span></label>
  <input type="text" onChange={getdata} placeholder='Enter OTP'  name='otp' className="form-control"/>
  {e?<div className='text-danger'>Otp Entered Is Incorrect</div>:""}
  <button className="btn btn-primary w-100 background mb-2 mt-3" onClick={postdata}>Verify OTP</button>
</div>
      </div>
      <div className='col-md-4 col-12'></div>
    </div>
    </>
  )
}

export default Forgeto