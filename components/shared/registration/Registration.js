import React, { useEffect, useState } from 'react'
import style from '../../../styles/registration.module.scss';


function Registration() {
  let [Fname,setFname] = useState("")
  let [Lname,setLname] = useState("")
  let [email,setEmail] = useState("")
  let [pass,setPass] = useState("")

  let onRegister = (e) =>{
    e.preventDefault()
    console.log(Fname,Lname,email,pass)
  }

  return (
    <form>
  
      <div className="row g-3 m-3 d-flex flex-column" >

        <div className="col-md-4 p-2">
          <label className="form-label" htmlFor="">First Name</label>
          <input 
            className="form-control" 
            type="text" 
            name="firstname"
            onChange={(e) =>setFname(e.target.value)} 
            required 
            minLength="3"
          />
        </div>

        <div className="col-md-4 p-2">
          <label className="form-label" htmlFor="">Last Name</label>
          <input 
            className="form-control" 
            type="text" 
            name="lastname"
            onChange={(e) =>setLname(e.target.value)} 
            required 
            minLength="3"
          />
        </div>

        <div className="col-md-4 p-2">
          <label className="form-label" htmlFor="">Email</label>
          <input 
            className="form-control" 
            type="email" 
            name="email"
            onChange={(e) =>setEmail(e.target.value)} 
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

      <input className={style.btn} type="submit" onClick={(e) =>onRegister(e)} value="Sign Up" />
    </form>
  )
}

export default Registration