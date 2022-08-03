import React from "react";
import { AiFillStar } from "react-icons/ai";
import CardSlider from "./CardSlider";

import style from '../../../styles/home.module.scss'
function CardDetails() {
  return (
    <div className={style.homeCardBox}>
      <CardSlider />
      <div className="d-flex">
        <h3>title</h3>
        <p>
          <AiFillStar /> rate
        </p>
      </div>
      <p>details</p>
      <p>date</p>
      <p>price</p>
    </div>
  );
}

export default CardDetails;
