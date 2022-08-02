import React from 'react'
import style from '../../../styles/registration.module.scss';


function Registration() {
  return (
    <form>
  
      <div className="row g-3 m-3 d-flex flex-column" >

        <div className="col-md-4 p-2">
          <label className="form-label" htmlFor="">First Name</label>
          <input className="form-control" type="text" name="firstname"/>
        </div>

        <div className="col-md-4 p-2">
          <label className="form-label" htmlFor="">Last Name</label>
          <input className="form-control" type="text" name="lastname"/>
        </div>

        <div className="col-md-4 p-2">
          <label className="form-label" htmlFor="">Email</label>
          <input className="form-control" type="text" name="email"/>
        </div>

        <div className="col-md-4 p-2">
          <label className="form-label" htmlFor="">Password</label>
          <input className="form-control" type="password" name="password"/>
        </div>

      </div>

      <input className={style.btn} type="button" value="Sign Up" />
    </form>
  )
}

export default Registration