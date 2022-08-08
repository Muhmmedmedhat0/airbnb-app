import React from 'react'
import Main from '../../components/host/Main';
import Selections from '../../components/host/Selections';
import style from "../../styles/becomeHost.module.scss"

function becomeHost() {
  return (
    <div className={style.Mycontainer}>
      <Main text="What kind of place will you host?"/>
      <Selections/>
    </div>
  )
}

export default becomeHost