import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import style from '../../../styles/registration.module.scss';


function Registration(props) {
  let [Fname,setFname] = useState("")
  let [email,setEmail] = useState("")
  let [pass,setPass] = useState("")

  let onRegister = (e) =>{
    e.preventDefault()
    console.log(Fname,email,pass)
  }

  let closePopup = () =>{
    props.setTrigger(false)
  }

  return (props.trigger) ? (
    <div className={style.popup}>
      <div className={style.popupInner}>
        <form>
          <h3>Sign up</h3>
          <div className="row g-3 m-3 d-flex flex-column" >

            <div className="col-md-8 p-2">
              <label className="form-label" htmlFor="" >Your Name</label>
              <input 
                className="form-control" 
                placeholder='Enter your name'
                type="text" 
                name="firstname"
                onChange={(e) =>setFname(e.target.value)} 
                required 
                minLength="3"
              />
            </div>

            <div className="col-md-8 p-2">
              <label className="form-label" htmlFor="" >Your Email</label>
              <input 
                className="form-control" 
                placeholder='Enter your email'
                type="email" 
                name="email"
                onChange={(e) =>setEmail(e.target.value)} 
                required
              />
            </div>

            <div className="col-md-8 p-2">
              <label className="form-label" htmlFor="" >Password</label>
              <input 
                className="form-control" 
                placeholder='Password'
                type="password" 
                name="password"
                onChange={(e) =>setPass(e.target.value)} 
                required 
                minLength="4"
              />
            </div>

          </div>

          <input className={style.btn} type="submit" onClick={(e) =>onRegister(e)} value="Sign Up" />

          <AiOutlineClose className={style.cBtn} onClick={() => closePopup()}>
          </AiOutlineClose>
        </form>

      </div>
    </div>
  ) : "";
}

export default Registration