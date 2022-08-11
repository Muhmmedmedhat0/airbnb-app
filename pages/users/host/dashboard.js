import React from 'react'
import HostNav from '../../../components/host/HostNav'
import Footer from '../../../components/shared/footer/Footer'
import HostDashboard from '../../../components/dashbords/users/host/hostDashboard'

function dashboard() {
  return (
    <div>
      <HostNav/>
      <HostDashboard/>
      <Footer/>
    </div>
  )
}

export default dashboard