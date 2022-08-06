import React from 'react'
import FilterNav from '../components/guest/header/FilterNav'
import MainNav from '../components/guest/header/MainNav'
import HotelDetsil from '../components/guest/home/HotelDetsil';
import Footer from "../components/shared/footer/Footer";
function hotel() {
    
  return (
    <>
      <header className='fixed-top'>
        <MainNav />
      </header>
      <main >
        <HotelDetsil/>
        </main>
      <Footer />
    </>
  )
}

export default hotel