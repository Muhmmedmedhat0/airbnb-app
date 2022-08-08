import React from 'react'
import Main from '../../../components/host/Main';
import Selections from '../../../components/host/Selections';
import style from "../../../styles/becomeHost.module.scss"

function floorPlan() {
  return (
    <div className={style.Mycontainer}>
      <Main text="How many guests would you like to welcome?"/>
      
    </div>
   
  )
}

export default floorPlan