import React, { useEffect, useState } from 'react'
import style from '../../../styles/login.module.scss';

function Login() {
  let [email,setEmail] = useState("")
  let [pass,setPass] = useState("")
  
  let onLogin = (e) =>{
    e.preventDefault()
   console.log(email,pass)
  }

  return (
    <form >
      <h3>Welcome to Airbnb</h3>
      <div className="row g-3 m-3 d-flex flex-column" >

        <div className="col-md-4 p-2">
          <label className="form-label" htmlFor="">Email</label>
          <input 
            className="form-control" 
            type="email" 
            name="email" 
            onChange={e=>setEmail(e.target.value)} 
            required 
          />
        </div>

        <div className="col-md-4 p-2">
          <label className="form-label" htmlFor="">Password</label>
          <input 
            className="form-control" 
            type="password" 
            name="password" 
            onChange={(e) =>setPass(e.target.value)} 
            required 
            minLength="4"
          />
        </div>

      </div>

      <input className={style.btn} type="submit" onClick={(e) =>onLogin(e)} value="login" />
    </form>
  )
}

export default Login