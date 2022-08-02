import React from 'react'
import style from '../../../styles/login.module.scss';

function Login() {
  return (
    <form >
      <h3>Welcome to Airbnb</h3>
      <div className="row g-3 m-3 d-flex flex-column" >

        <div className="col-md-4 p-2">
          <label className="form-label" htmlFor="">Email</label>
          <input className="form-control" type="text" name="loginusername" required
              minlength="5"/>
        </div>

        <div className="col-md-4 p-2">
          <label className="form-label" htmlFor="">Password</label>
          <input className="form-control" type="password" name="userpassword"  required 
            minlength="4"/>
        </div>

      </div>

      <input className={style.btn} type="submit" value="login" />
    </form>
  )
}

export default Login