import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import style from '../../../styles/login.module.scss';


function Login(props) {
  let [email,setEmail] = useState("")
  let [pass,setPass] = useState("")
  
  let onLogin = (e) =>{
    e.preventDefault()
   console.log(email,pass)
  }

  let closePopup = () =>{
    props.setTrigger(false)
  }

  return (props.trigger) ? (
    <div className={style.popup} >
      <div className={style.popupInner}>
        <form method='post' action="http://localhost:9000/api/hotels">
          <h3>Welcome to Airbnb</h3>
          <div className="row g-3 m-3 d-flex flex-column" >

            <div className="col-md-7 p-2">
              <label className="form-label" htmlFor="" >Email</label>
              <input 
                className="form-control" 
                placeholder='Enter your email'
                type="email" 
                name="email" 
                onChange={e=>setEmail(e.target.value)} 
                required 
              />
            </div>

            <div className="col-md-7 p-2">
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

          <input className={style.btn} type="submit" onClick={(e) =>onLogin(e)} value="login" />

          
          <AiOutlineClose className={style.cBtn} onClick={() => closePopup()}>
          </AiOutlineClose>
        </form>

      </div>
    </div>
  ) : "";
}

export default Login