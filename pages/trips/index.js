import Link from 'next/link'
import React ,{useState, useEffect}from 'react'
import MainNav from '../../components/guest/header/MainNav'
import Footer from "../../components/shared/footer/Footer";
import style from "../../styles/home.module.scss";

export default function trips() {
    const [trip,setTrip]=useState([]);


    useEffect(()=>{
      // API call
      fetch('url')
      .then(response=> response.json())
      .then(data=>{
        setTrip(data)
      })
      .catch(error=>console.log(error))
    },[])
  return (<>
    <MainNav />

    <div className='container mt-3'>
        <div className='row'>
            <h1>Trips</h1>

        </div>
    </div>
    <hr/>

    {
      trip.length ? <>
      {trip.map((item) => (
        <div key={item.id} className={style.homeCardBox}>
          <div className={style.CardBoxHeartIcon}>
            
          </div>
           <CardSlider dumImg={item.images} hotID={item.id} />
            <div className="d-flex justify-content-between">
            <h3><Link href='/kkk'>{item.name}</Link></h3>
              
            </div>
            <p>details</p>
            <p>kkk</p>
            <p>price</p>
          </div>
      ))}
      
      
      </> : <EmptyList/>
    } 
   
    <Footer></Footer>

  </>
  )
}

const EmptyList = () => {
    return (
       <>
        {/* <hr></hr> */}
      <div className="px-4   rounded-3 ">
        <div className="container ">
          <div className="row">
            <h2>No trips booked...yet!</h2>
            <p className='text-muted ms-4'>Time to dust off your bags and start planning your next adventure</p>
            <Link href={`/`}><a><button className='btn btn-white my-3 p-3 text-bold'>Start searching</button></a></Link> 
            <hr></hr>
<p>Can't find your reservation here? <a><strong>Visit the Help Center</strong></a></p>
          </div>
        </div>
      </div>
       </>
  
    )
  }