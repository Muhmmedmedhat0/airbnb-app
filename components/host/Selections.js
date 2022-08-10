import React, { useEffect, useState } from 'react'
import Link from "next/link";
import style from "../../styles/becomeHost.module.scss"

function Selections(props) {
  let [soptions, setOptions] = useState([])
  useEffect(()=>{
   setOptions(props.selectOptions)
   console.log(props)
  },[props])

  return (
    <div className={style.container}>
      <div className={style.sContainer}>
        {soptions.map((item)=>{
          return <button className={style.sBtn}>{item}</button>
        })
        }
       
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

export default Selections