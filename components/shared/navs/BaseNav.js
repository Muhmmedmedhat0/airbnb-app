import React from 'react'
import {useState} from "react"
import Link from "next/link";
import { GiWorld } from "react-icons/gi";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
// BiMenuAltLeft;

import style from "../../../styles/header.module.scss";
import Login from "../../shared/login/Login";
import Registration from "../../shared/registration/registration";
import ImageComponent from "../../shared/ImageComponent";

function BaseNav() {
    const [LpopupBtn,setLpopupBtn] = useState(false);
    const [RpopupBtn,setRpopupBtn] = useState(false);
   
  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-white  ${style.mainNav}`}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <div className="d-flex align-items-center">
            <ImageComponent
              src="/assets/airbnb.png"
              width="30"
              height="30"
            />
            <span>airbnb</span>
          </div>
        </a>
        <div className="d-flex align-items-center justify-content-between ">
          <div className={style.hostLink}>
            <Link href="/host">Become a Host</Link>
          </div>
          <div>
            <GiWorld />
          </div>
          <div className={`dropdown ${style.dropBox}`}>
            <button
              className={`btn ${style.bosStyle}`}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <BiMenuAltLeft />
              <FaUserCircle />
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" onClick={()=> setRpopupBtn(true)}>
                  sign up
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={()=> setLpopupBtn(true)}>
                  login in
                </a>
              </li>
              <hr></hr>
              <li>
                <a className="dropdown-item" href="#">
                  host your home 
                </a>
              </li><li>
                <a className="dropdown-item" href="#">
                  host an experience
                </a>
              </li><li>
                <a className="dropdown-item" href="#">
                  help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <Login trigger={LpopupBtn} setTrigger={setLpopupBtn}/>
    <Registration trigger={RpopupBtn} setTrigger={setRpopupBtn}/>
  </>

  )
}

export default BaseNav
