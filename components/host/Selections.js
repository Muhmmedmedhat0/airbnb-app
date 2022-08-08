import React from 'react'
import Link from "next/link";
import style from "../../styles/becomeHost.module.scss"

function Selections() {
  return (
    <div className={style.container}>
      <div className={style.sContainer}>
        <button className={style.sBtn}>Apartment</button>
        <button className={style.sBtn}>House</button>
        <button className={style.sBtn}>Secondary unit</button>
        <button className={style.sBtn}>Uniqe space</button>
        <button className={style.sBtn}>bed and breakfast</button>
      </div>
      <div className={style.Bcontainer}>
        <button className={style.backBtn}>Back</button>
        <button className={style.nextBtn}>Next</button>
      </div>
    </div>
  )
}

export default Selections