import React, { useEffect, useState } from 'react'
import Link from "next/link";
import style from "../../styles/becomeHost.module.scss"

function PhotoInputs(props) {
  return (
    <div className={style.container}>
      <div className={style.sContainer}>
        <form className={style.sContainer}>
         <label className={style.gLable} for="img" style={{paddingBottom:"10%", width:"60%"}}>Upload from your device</label>
         <input  type="file" id="img" name="img[]" accept="image/*" multiple/>
        </form>
      </div>
      <div className={style.Bcontainer}>
        <Link href={`${props.nextHref}`}>
          <button className={style.backBtn}>Back</button>
        </Link>
        <Link href={`${props.backHref}`}>
          <button className={style.nextBtn}>Next</button>
        </Link>
      </div>
    </div>
  )
}

export default PhotoInputs