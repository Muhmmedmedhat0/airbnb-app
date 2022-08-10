import React, { useEffect, useState } from 'react'
import Link from "next/link";
import style from "../../styles/becomeHost.module.scss"

function PlaceInfo(props) {
  let [title,setTitle] = useState("")
  let [description,setDesc] = useState("")
  let [price,setPrice] = useState("")
  return (
    <div className={style.container}>
    <div className={style.sContainer}>
      <form className={style.sContainer}>
          
              <input 
                className={`form-control ${style.formInput}`}
                placeholder='Create your title'
                type="text" 
                name="title"
                onChange={(e) =>setTitle(e.target.value)} 
                required 
                minLength="3"
              />
            
              <input 
                className={`form-control ${style.formInput}`}
                placeholder='Create your description'
                type="text" 
                name="Description"
                onChange={(e) =>setDesc(e.target.value)} 
                required
              />

              <input 
                className={`form-control ${style.formInput}`}
                placeholder='$19'
                type="text" 
                name="price"
                onChange={(e) =>setPrice(e.target.value)} 
                required 
                minLength="4"
              />

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

export default PlaceInfo