import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Profile from "../assets/images/noimage.png"
import { Context } from '../Store/CreateContextProvider'

function Card(props) {
  var { remove } = useContext(Context)
  var navigate = useNavigate()
  let [dates, setdates] = useState('')
  let [month, setmonth] = useState('')
  let [years, setyears] = useState('')
  let [hour, sethour] = useState('')
  let [minute, setminute] = useState('')
  let [second, setsecond] = useState('')
  async function del(id) {
    if (window.confirm('Are You Sure You Want To Delete')) {
      var value = prompt("Enter The Password To Delete This Data.")
      var item = {
        _id: id
      }
      var response = await remove(item, value)
      if (response.result === "Done") {
        alert(response.message)
        localStorage.clear()
        navigate('/add')
      }
      else
        alert(response.message)
    }
    else { }
  }
  function data() {
    var date = new Date(props.date).getDate()
    var mon = new Date(props.date).getMonth()
    var year = new Date(props.date).getFullYear()
    var min = new Date(props.date).getMinutes()
    var sec = new Date(props.date).getSeconds()
    var hr = new Date(props.date).getHours()
    hr = hr - 12
    year = year.toString()
    hr = hr.toString()
    min = min.toString()
    sec = sec.toString()
    date = date.toString()
    mon = mon + 1
    mon = mon.toString()
    if (date.length < 2) {
      date = "0" + date
      setdates(date)
    }
    if (sec.length < 2) {
      sec = "0" + sec
      setsecond(sec)
    }
    if (min.length < 2) {
      min = "0" + min
      setminute(min)
    }
    if (hr.length < 2) {
      hr = "0" + hr
      sethour(hr)
    }
    if (mon.length < 2) {
      mon = "0" + mon
      setmonth(mon)
    }
    if (mon.length > 1) {
      setmonth(mon)
    }
    if (date.length > 1) {
      setdates(date)
    }
    if (year.length > 1) {
      setyears(year)
    }
    if (hr.length > 1) {
      sethour(hr)
    }
    if (min.length > 1) {
      setminute(min)
    }
    if (sec.length > 1) {
      setsecond(sec)
    }
  }
  useEffect(() => {
    data()
  }, [])
  return (
    <>
      <div className='col-md-3 col-12 mb-2'>
        <div className="card">
          <img src={props.pic ? props.pic : Profile} className="card-img-top" height="150px" alt="..." />
          <div height="400px">
            <div className={props.modes ? "card-body bg-dark" : "card-body bg-light"}>
              <h5 className={props.modes ? "card-title text-center text-light" : "card-title text-center text-dark"}>{props.name}</h5>
              <div className='text-center mt-1 mb-1'>{`${dates}-${month}-${years}  ${hour}:${minute}:${second}`}</div>
              <p className={props.modes ? "card-title text-light" : "card-title text-dark"}>UserName: {props.username}</p>
              <div className={props.modes ? "card-title text-light" : "card-title text-dark"}>Email :{props.email}</div>
              <div className={props.modes ? "card-title text-light" : "card-title text-dark"}>Phone Number :{props.phone}</div>
              <div className={props.modes ? "card-title text-light" : "card-title text-dark"}>City :{props.city}</div>
              <div className={props.modes ? "card-title text-light" : "card-title text-dark"}>State :{props.state}</div>
              <div className='row'>
                <div className='d-flex justify-content-between'>
                  <Link to={`/edit/${props._id}`} className="btn btn-primary ml">Edit</Link>
                  <button className='btn btn-danger' onClick={() => del(props._id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card