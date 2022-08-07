import React from 'react'
import Main from '../../components/host/Main';
import style from "../../styles/becomeHost.module.scss"

function becomeHost() {
  return (
    <div className={style.Mycontainer}>
      <Main/>
      <div className={style.container}>Helo</div>
    </div>
  )
}

export default becomeHost