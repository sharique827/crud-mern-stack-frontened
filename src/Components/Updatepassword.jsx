import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Store/CreateContextProvider";
import { useNavigate } from "react-router-dom";
import CachedIcon from "@mui/icons-material/Cached";

function Updatepassword(props) {
  var navigate = useNavigate();
  var { updatepass } = useContext(Context);
  let [show, setshow] = useState(1);
  let [a, seta] = useState(0);
  let [n, setn] = useState(0);
  let [c, setc] = useState(0);
  let [e, sete] = useState(0);
  let [cap, setcap] = useState(0);
  let [currpass, setcurrpass] = useState("currentpassword");
  let [password, setpassword] = useState("");
  let [capt, setcapt] = useState("");
  let [captcha, setcaptcha] = useState("");
  let [cpassword, setcpassword] = useState("");
  function chang() {
    setshow(!show);
  }
  function getdata(e) {
    if (e.target.name === "currpass") {
      setc(0);
      setcurrpass(e.target.value);
    }
    if (e.target.name === "captcha") {
      setcap(0);
      setcaptcha(e.target.value);
    }
    if (e.target.name === "password") {
      setn(0);
      setpassword(e.target.value);
    }
    if (e.target.name === "cpassword") {
      sete(0);
      setcpassword(e.target.value);
    }
  }
  async function postdata() {
    if (password !== cpassword) {
      sete(1);
    } else {
      if (capt !== captcha) {
        setcap(1);
      } else {
        var item = {
          email: localStorage.getItem("email"),
          password: password,
        };
        var response = await updatepass(item, currpass);
        if (response.result === "Done") {
          seta(1);
          setTimeout(() => {
            navigate(`/profile/${localStorage.getItem("id")}`);
          }, 2000);
        } else {
          // alert(response.message)
          if (response.message.includes("Current")) {
            setc(1);
          } else if (response.message.includes("New")) {
            setn(1);
          } else {
            alert(response.message);
          }
        }
      }
    }
  }
  function captchaa() {
    var ca = "";
    var b = "ABCDEFGHIJKLMNOP012345QRSTUV6789WXYZ";
    for (let i = 0; i < 6; i++) {
      ca += b.charAt(Math.random() * b.length);
    }
    setcapt(ca);
  }
  useEffect(() => {
    captchaa();
  }, []);
  return (
    <>
      <h2 className="text-light text-center background mt-2 rounded">
        Change Password :
      </h2>
      <div className="row">
        <div className="col-md-4 col-12"></div>
        <div className="col-md-4 col-12">
          {a ? (
            <div className="alert alert-success text-center">
              Password Updated Successfully
            </div>
          ) : (
            ""
          )}
          <div className="mb-3">
            <label
              for="exampleInputEmail1"
              className={
                props.modes ? "form-label text-light" : "form-label text-dark"
              }
            >
              Enter Current Password<span className="text-danger">*</span>
            </label>
            <input
              type="password"
              onChange={getdata}
              placeholder="Enter Current Password"
              name="currpass"
              className="form-control"
            />
            {c ? (
              <div className="text-danger">Current Password Is Incorrect</div>
            ) : (
              ""
            )}
          </div>
          <div className="mb-3">
            <label
              for="exampleInputEmail1"
              className={
                props.modes ? "form-label text-light" : "form-label text-dark"
              }
            >
              Enter New Password<span className="text-danger">*</span>
            </label>
            <input
              type="password"
              onChange={getdata}
              placeholder="Enter New Password"
              name="password"
              className="form-control"
            />
            {n ? (
              <div className="text-danger">
                New Password Cannot Be Same As Current Password
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="mb-3">
            <label
              for="exampleInputEmail1"
              className={
                props.modes ? "form-label text-light" : "form-label text-dark"
              }
            >
              Confirm New Password<span className="text-danger">*</span>
            </label>
            <input
              type={show ? "password" : "text"}
              onChange={getdata}
              placeholder="Confirm New Password"
              name="cpassword"
              className="form-control"
            />
            {e ? (
              <div className="text-danger">
                Confirm Password DoesNot Matches To Password
              </div>
            ) : (
              ""
            )}
            <div class="mb-3 form-check mt-2">
              <input
                type="checkbox"
                onClick={chang}
                className="form-check-input"
                id="exampleCheck1"
              />
              <label
                className={
                  props.modes
                    ? "form-check-label text-light"
                    : "form-check-label text-dark"
                }
                for="exampleCheck1"
              >
                Show Password
              </label>
            </div>
            <div className="text-center">
              <span className="captcha">
                <del>{capt}</del>
              </span>
              <span>
                <button
                  className="btn btn-sm text-light bg-success marginleft"
                  onClick={captchaa}
                >
                  <CachedIcon />
                </button>
              </span>
            </div>
            <div className="mb-3">
              {/* <label className={props.modes ? "form-label text-light" : "form-label text-dark"}>Enter Captcha</label> */}
              <div className="text-center">
                <span>
                  <input
                    type="text"
                    onChange={getdata}
                    placeholder="Enter Captcha"
                    name="captcha"
                    size={6}
                    className="mt-2 rounded"
                  />
                </span>
              </div>
              {cap ? (
                <div className="text-danger">Captcha Is Incorrect</div>
              ) : (
                ""
              )}
            </div>
            <button
              className="btn btn-primary w-100 background mb-2 mt-1"
              onClick={postdata}
            >
              Update Password
            </button>
          </div>
        </div>
        <div className="col-md-4 col-12"></div>
      </div>
    </>
  );
}

export default Updatepassword;
