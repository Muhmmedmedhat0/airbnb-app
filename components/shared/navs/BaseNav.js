import React from "react";
import { useState } from "react";
import Link from "next/link";
import { GiWorld } from "react-icons/gi";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
// BiMenuAltLeft;

import style from "../../../styles/header.module.scss";
import Login from "../../shared/login/Login";
import Registration from "../../shared/registration/registration";
import ImageComponent from "../../shared/ImageComponent";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../../app/slices/auth/authSlice";
import { Route, useLocation, useNavigate } from "react-router-dom";

function BaseNav() {
  const [LpopupBtn, setLpopupBtn] = useState(false);
  const [RpopupBtn, setRpopupBtn] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-white  ${style.mainNav}`}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <div className="d-flex align-items-center">
              <ImageComponent src="/assets/airbnb.png" width="30" height="30" />
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
                {!user ? (
                  <>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => setRpopupBtn(true)}
                      >
                        sign up
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => setLpopupBtn(true)}
                      >
                        login in
                      </a>
                    </li>
                  </>
                ) : (
                  <li>
                    {console.log(user.name)}

                    <Link
                      href={`/users/profile/${user._id}`}
                      className="dropdown-item"
                    >
                      profile
                    </Link>
                  </li>
                )}
                <hr></hr>
                <li>
                  <a className="dropdown-item" href="#">
                    host your home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    host an experience
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    help
                  </a>
                </li>
                {user ? (
                  <li onClick={onLogout}>
                    <a className="dropdown-item" href="#">
                      logout
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Login trigger={LpopupBtn} setTrigger={setLpopupBtn} />
      <Registration trigger={RpopupBtn} setTrigger={setRpopupBtn} />
    </>
  );
}

export default BaseNav;
