import React from 'react'
import style from '../../styles/content.module.scss';

function Content(props) {
  return (
    <div className={style.myDiv}>
      <header className={style.header}>{props.text}</header>
      <button className={style.btn}>Try hosting</button>
    </div>
  )
}

export default Content
