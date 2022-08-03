import React from 'react'
import CardDetails from './CardDetails'

import style from '../../../styles/home.module.scss'
function Cards() {
  return (
    <div className='container' >
        <div className='d-flex flex-wrap justify-content-between'>
            <CardDetails/>
            <CardDetails/>
            <CardDetails/>
            <CardDetails/>

        </div>
    </div>
  )
}

export default Cards