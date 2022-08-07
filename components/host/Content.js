import React from 'react'
import Link from "next/link";
import style from '../../styles/content.module.scss';

function Content(props) {
  return (
    <div className={style.myDiv}>
      <header className={style.header}>{props.text}</header>
      <Link href={`${props.href}`}>
        <button className={style.btn}>{props.btnText}</button>
      </Link>
    </div>
  )
}

export default Content
