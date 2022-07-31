import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import style from "../../../styles/header.module.scss";

function MainNav() {
  const myLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}`;
  };
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-light ${style.mainNav}`}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image
              loader={myLoader}
              src="airbnb.png"
              alt="Picture of the author"
              width={30}
              height={30}
            />
            <span>airbnb</span>
          </a>
          <button
            className="navbar-toggler"
            type="buttn"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`d-flex  ${style.navSearch}`}>
            <p>Anywhere </p>|<p>Any week</p>|<p>Add guests</p>
            <p>
              <AiOutlineSearch />
            </p>
          </div>
          <div className="d-flex">
            <Link href="/">Become a Host</Link>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
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
