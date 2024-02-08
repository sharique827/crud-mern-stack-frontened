/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Context } from '../Store/CreateContextProvider'

function Navbar(props) {
  var { logout, logoutall } = useContext(Context)
  let [value, setvalue] = useState('')
  let [a, seta] = useState(1)
  var navigate = useNavigate()
  function getdata(e) {
    setvalue(e.target.value)
    navigate(`/search/${e.target.value}`)
  }
  function postdata() {
    navigate(`/search/${value}`)
  }
  function change() {
    props.switch(a)
    seta(!a)
  }
  async function log() {
    var item = {
      email: localStorage.getItem('email'),
      token: localStorage.getItem('token')
    }
    var response = await logout(item)
    if (response.result === "Done") {
      alert(response.message)
      localStorage.clear()
      setTimeout(() => {
        navigate('/login')
      }, 1000);

    }
    else
      alert(response.message)
  }
  async function logall() {
    var item = {
      email: localStorage.getItem('email'),
      token: localStorage.getItem('token')
    }
    var response = await logoutall(item)
    if (response.result === "Done") {
      alert(response.message)
      localStorage.clear()
      setTimeout(() => {
        navigate('/login')
      }, 1000);

    }
    else
      alert(response.message)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg background sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/add">Add</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/link">Link</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-light">Disabled</a>
              </li>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown text-light">
                  <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            </ul>
            <div className="d-flex w-100" role="search">
              <input className="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" onChange={getdata} />
              <button className="btn btn-outline-light" onClick={postdata}>Search</button>
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Setting
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <div class="form-check form-switch">
                      <input class="form-check-input" onClick={change} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                      <label class="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/changepassword">Change Password</Link></li>
                </ul>
              </li>
            </ul>

            {
              localStorage.getItem('login') ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Menu
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-primary" to={`/profile/${localStorage.getItem('id')}`}>Profile</Link></li>
                    <li><button className="dropdown-item text-primary" onClick={log}>Logout</button></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item text-primary" onClick={logall}>Logout All</button></li>
                  </ul>
                </li>
              </ul> : <Link className='text-light log' to="/login">Login</Link>
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar