import React from 'react'
import Content from '../../components/host/Content';
import Video from '../../components/host/Video';
import Footer from "../../components/shared/footer/Footer";
import HostNav from '../../components/host/HostNav';
import MyCards from '../../components/host/MyCards';
import Banner from '../../components/host/Banner';


function host() {
  return (
    <>
       <HostNav/>
       <div className='row'>
        <div className="col-6 p-0">
            <Content text="Open your door to hosting"/>
          </div>
          <div className='col-6 p-0'>
          <Video src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4"/>
          </div>
       </div>

       <Banner/>

       <div className='row'>
         <div className='col-6 p-0'>
            <Video src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4"/>
         </div>
         <div className="col-6 p-0">
            <Content text="Try hosting on Airbnb"/>
         </div>    
       </div>

       <MyCards/>
      <Footer/>
    </>
  )
}

export default host