import React ,{useState, useEffect}from 'react'
import MainNav from '../../components/guest/header/MainNav';
import Footer from "../../components/shared/footer/Footer";
import style from "../../styles/home.module.scss";
import Link from 'next/link'

export default function wishlist() {
  const [wishList,setWishList]=useState([]);


  useEffect(()=>{
    // API call
    fetch('url')
    .then(response=> response.json())
    .then(data=>{
      setWishList(data)
    })
    .catch(error=>console.log(error))
  },[])

  return (
    <>
        
      <MainNav />

      <div className='container mt-3'>
        <div className='row'>
            <h1>WishList</h1>

        </div>
    </div>
    <hr/>

      {
        wishList.length ? <>
        {wishList.map((item) => (
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
        
      {/* <HostNav/> */}
      <Footer></Footer>

    </>
  )
}



const EmptyList = () => {
  return (
    <div className="px-4   rounded-3 ">
      <div className="container ">
        <div className="row">
          <h2>Your WishList is Empety...</h2>
          <p className='ms-4'> You can add your favorite places here now</p>
          <Link href={`/`}><a><button className='btn btn-white my-3 p-3 text-bold'>Add Now</button></a></Link> 

        </div>
      </div>
    </div>

  )
}