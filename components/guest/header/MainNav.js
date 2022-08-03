import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
// BiMenuAltLeft;

import style from "../../../styles/header.module.scss";

function MainNav() {
  const myLoader = ({ src, width, quality }) => {
    return `/assets/${src}?w=${width}`;
  };
  return (
    <>
      <nav className={`navbar navbar-expand-lg  ${style.mainNav}`}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <div className="d-flex align-items-center">
              <Image
                loader={myLoader}
                src="airbnb.png"
                alt="Picture of the author"
                width={30}
                height={30}
              />
              <span>airbnb</span>
            </div>
          </a>
          <div className={`d-flex  align-items-center ${style.navSearch}`}>
            <p>Anywhere </p>|<p>Any week</p>|<p>Add guests</p>
            <p className={style.searchIcon}>
              <AiOutlineSearch />
            </p>
          </div>
          <div className="d-flex align-items-center ">
            <div className={style.hostLink}>
              <Link href="/">Become a Host</Link>
            </div>
            <div>
              <GiWorld />
            </div>
            <div className="dropdown">
              <button
                className={`btn ${style.boxSh} `}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BiMenuAltLeft />
                <FaUserCircle />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    sign up
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
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
    </>
  );
}

export default MainNav;
