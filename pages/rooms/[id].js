import React from 'react'
import FilterNav from '../../components/guest/header/FilterNav'
import MainNav from '../../components/guest/header/MainNav'
import HotelDetsil from '../../components/guest/home/hotels/HotelDetsil';
import Footer from "../../components/shared/footer/Footer";
import { useRouter } from 'next/router'
function Hotel() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <header className='fixed-top'>
        <MainNav />
      </header>
      <main >
        {console.log(id)}
        <HotelDetsil Rid={id}/>
        </main>
      <Footer />
    </>
  )
}

export default Hotel