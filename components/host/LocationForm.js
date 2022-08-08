import React, { useEffect, useState } from 'react'
import Link from "next/link";
import style from "../../styles/becomeHost.module.scss"

function LocationForm(props) {
  let [street,setStreet] = useState("")
  let [city,setCity] = useState("")
  let [country,setCountry] = useState("")

  return (
    <div className={style.container}>
      <form className={style.sContainer}>
          
              <input 
                className={`form-control ${style.formInput}`}
                placeholder='street'
                type="text" 
                name="street"
                onChange={(e) =>setStreet(e.target.value)} 
                required 
                minLength="3"
              />
            
              <input 
                className={`form-control ${style.formInput}`}
                placeholder='city'
                type="text" 
                name="city"
                onChange={(e) =>setCity(e.target.value)} 
                required
              />

              <input 
                className={`form-control ${style.formInput}`}
                placeholder='country'
                type="text" 
                name="country"
                onChange={(e) =>setCountry(e.target.value)} 
                required 
                minLength="4"
              />

      </form>
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

export default LocationForm