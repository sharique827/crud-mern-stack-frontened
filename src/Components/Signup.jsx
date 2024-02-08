import React, { useContext, useState } from 'react'
import { Context } from '../Store/CreateContextProvider'
import { Link, useNavigate } from 'react-router-dom'

function Signup(props) {
  var { submit } = useContext(Context)
  let [us, setus] = useState(0)
  let [na, setna] = useState(0)
  let [em, setem] = useState(0)
  let [et, setet] = useState(0)
  let [ph, setph] = useState(0)
  let [s, sets] = useState(0)
  var navigate = useNavigate()
  let [a, seta] = useState(1)
  var [username, setusername] = useState('')
  var [name, setname] = useState('')
  var [email, setemail] = useState('')
  var [password, setpassword] = useState('')
  var [phone, setphone] = useState('')
  var [city, setcity] = useState('')
  var [state, setstate] = useState('')
  function chang() {
    seta(!a)
  }
  function getdata(e) {
    if (e.target.name === "username") {
      setus(0)
      setusername(e.target.value)
    }

    if (e.target.name === "name") {
      setna(0)
      setname(e.target.value)
    }
    if (e.target.name === "email") {
      setem(0)
      setet(0)
      setemail(e.target.value)
    }
    if (e.target.name === "password")
      setpassword(e.target.value)
    if (e.target.name === "phone") {
      setph(0)
      setphone(e.target.value)
    }
    if (e.target.name === "city")
      setcity(e.target.value)
    if (e.target.name === "state")
      setstate(e.target.value)
  }
  async function postdata() {
    var item = {
      username: username,
      name: name,
      email: email,
      password: password,
      phone: phone,
      city: city,
      state: state,
      date: new Date()
    }
    var response = await submit(item)
    if (response.result === "Done") {
      sets(1)
      setTimeout(() => {
        navigate('/') 
      }, 1000);
    }
    else {
      if (response.message==="UserName Is Required Field")
        setus(1)
      else if (response.message.includes("Name"))
        setna(1)
      else if (response.message.includes("Email Is Already Taken"))
        setet(1)
      else if (response.message.includes("email Is Required Field"))
        setem(1)
      else if (response.message.includes("Phone"))
        setph(1)
      else
        alert(response.message)
    }

  }
  return (
    <>
      <h2 className='text-light text-center background mt-2 rounded'>Signup Page :</h2>
      <div className='row'>
        <div className='col-md-3 col-12'></div>


        <div className='col-md-6 col-12'>

          <div className='mb-4'><span className='text-danger'>*</span> <span className='text-primary'>Indicates Required Field</span></div>
          <div className="mb-3">
          {s?<div className='alert alert-success sticky-top text-center'>Account Created Successfully..!</div>:""}
            <label className={props.modes ? "form-label text-light" : "form-label text-dark"}>UserName <span className='text-danger'>*</span></label>
            <input type="text" onChange={getdata} name='username' className="form-control" placeholder='Enter UserName' />
            {us ? <div className='text-danger'>Please Enter Username</div> : ""}
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className={props.modes ? "form-label text-light" : "form-label text-dark"}>Name <span className='text-danger'>*</span></label>
            <input type="text" onChange={getdata} placeholder='Enter Name' name='name' className="form-control" />
            {na ? <div className='text-danger'>Please Enter Name</div> : ""}
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className={props.modes ? "form-label text-light" : "form-label text-dark"}>Email address <span className='text-danger'>*</span></label>
            <input type="email" onChange={getdata} placeholder='Enter Email ID' name='email' className="form-control" />
            {em ? <div className='text-danger'>Please Enter Email ID</div> : ""}
            {et ? <div className='text-danger'>Email Is Already Taken, Please Choose Another Email ID</div> : ""}
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className={props.modes ? "form-label text-light" : "form-label text-dark"}>Password <span className='text-danger'>*</span></label>
            <input type={a ? "password" : "text"} onChange={getdata} placeholder='Enter Password' name='password' className="form-control" />
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" onClick={chang} className="form-check-input" id="exampleCheck1" />
            <label className={props.modes ? "form-check-label text-light" : "form-check-label text-dark"} for="exampleCheck1">Show Password</label>
          </div>
          <div className="mb-3">
            <label className={props.modes ? "form-label text-light" : "form-label text-dark"}>Phone Number <span className='text-danger'>*</span></label>
            <input type="text" onChange={getdata} placeholder='Enter Phone Number' name='phone' className="form-control" />
            {ph ? <div className='text-danger'>Please Enter Phone Number</div> : ""}
          </div>
          <div className="mb-3">
            <label className={props.modes ? "form-label text-light" : "form-label text-dark"}>City</label>
            <input type="text" onChange={getdata} placeholder='Enter City' name='city' className="form-control" />
          </div>
          <div className="mb-3">
            <label className={props.modes ? "form-label text-light" : "form-label text-dark"}>State</label>
            <input type="text" onChange={getdata} placeholder='Enter State' name='state' className="form-control" />
          </div>
          <button className="btn btn-primary w-100 background mb-2" onClick={postdata}>Signup</button>
          <div className='text-primary mb-2'><Link className='under' to="/login">Already An User? Login</Link></div>
        </div>


        <div className='col-md-3 col-12'></div>
      </div>
    </>
  )
}

export default Signup