import React, { useEffect } from "react";
import style from "../../../styles/home.module.scss";
import CardSlider from "./CardSlider";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "../../../app/slices/hotelSlice";
import Link from "next/link";
function Cards() {
  const dummyData = [
    {
      id: 1,
      name: "Badachro, UK",
      rate: 44,
      price: 555,
      images: [
        "https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=960",
        "https://a0.muscache.com/im/pictures/4f4e82b1-3270-4c5a-9628-83ab64ae8f58.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/fe2a079c-e2b3-4832-b814-5295abf411ea.jpg?im_w=720",
      ],
      desc: "fjbhhvbh  eifhbuwefw fiwbcuwj joen ",
      date: 7 - 7 - 2005,
    },
    {
      id: 2,
      name: "njndj",
      rate: 44,
      price: 555,
      images: [
        "https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=960",
        "https://a0.muscache.com/im/pictures/4f4e82b1-3270-4c5a-9628-83ab64ae8f58.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/fe2a079c-e2b3-4832-b814-5295abf411ea.jpg?im_w=720",
      ],
      desc: "fjbhhvbh  eifhbuwefw fiwbcuwj joen ",
      date: 7 - 7 - 2005,
    },
    {
      id: 3,
      name: "njndj",
      rate: 44,
      price: 555,
      images: [
        "https://a0.muscache.com/im/pictures/fe2a079c-e2b3-4832-b814-5295abf411ea.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=960",
        "https://a0.muscache.com/im/pictures/4f4e82b1-3270-4c5a-9628-83ab64ae8f58.jpg?im_w=720",
      ],
      desc: "fjbhhvbh  eifhbuwefw fiwbcuwj joen ",
      date: 7 - 7 - 2005,
    },
    {
      id: 5,
      name: "njndj",
      rate: 44,
      price: 555,
      images: [
        "https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=960",
        "https://a0.muscache.com/im/pictures/4f4e82b1-3270-4c5a-9628-83ab64ae8f58.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/fe2a079c-e2b3-4832-b814-5295abf411ea.jpg?im_w=720",
      ],
      desc: "fjbhhvbh  eifhbuwefw fiwbcuwj joen ",
      date: 7 - 7 - 2005,
    },
    {
      id: 6,
      name: "njndj",
      rate: 44,
      price: 555,
      images: [
        "https://a0.muscache.com/im/pictures/4f4e82b1-3270-4c5a-9628-83ab64ae8f58.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=960",
        "https://a0.muscache.com/im/pictures/fe2a079c-e2b3-4832-b814-5295abf411ea.jpg?im_w=720",
      ],
      desc: "fjbhhvbh  eifhbuwefw fiwbcuwj joen ",
      date: 7 - 7 - 2005,
    },
    {
      id: 9,
      name: "njndj",
      rate: 44,
      price: 555,
      images: [
        "https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=960",
        "https://a0.muscache.com/im/pictures/4f4e82b1-3270-4c5a-9628-83ab64ae8f58.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/fe2a079c-e2b3-4832-b814-5295abf411ea.jpg?im_w=720",
      ],
      desc: "fjbhhvbh  eifhbuwefw fiwbcuwj joen ",
      date: 7 - 7 - 2005,
    },
    {
      id: 10,
      name: "hagoura",
      rate: 44,
      price: 555,
      images: [
        "https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=960",
        "https://a0.muscache.com/im/pictures/4f4e82b1-3270-4c5a-9628-83ab64ae8f58.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/fe2a079c-e2b3-4832-b814-5295abf411ea.jpg?im_w=720",
      ],
      desc: "fjbhhvbh  eifhbuwefw fiwbcuwj joen ",
      date: 7 - 7 - 2005,
    },
    ,
    {
      id: 10,
      name: "at2ota",
      rate: 44,
      price: 555,
      images: [
        "https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=960",
        "https://a0.muscache.com/im/pictures/4f4e82b1-3270-4c5a-9628-83ab64ae8f58.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/fe2a079c-e2b3-4832-b814-5295abf411ea.jpg?im_w=720",
      ],
      desc: "fjbhhvbh  eifhbuwefw fiwbcuwj joen ",
      date: 7 - 7 - 2005,
    },
  ];
  const hoteldata = useSelector((state) => state.hotel);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHotels());
    console.log(hoteldata);
  }, []);


  const toggleItemToWishlist = async (item) =>{
    const data = {};
    
    fetch('url', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response=> response.json())
    .then(data=> console.log('success'))
    .catch(error=> console.log(error))
  }





  return (
    <>
    
    <div className="container ">
      
      <div className="d-flex flex-wrap justify-content-between">
        {dummyData.map((item) => (
          <div key={item.id} className={style.homeCardBox}>
            <div className={style.CardBoxHeartIcon}>
              <button
                className="btn btn-light"
                onClick={()=>toggleItemToWishlist(item)}
              ><AiOutlineHeart /></button>
              {/* AiFillHeart */}
            </div>
            
            <Link href={`/`}><a> <CardSlider dumImg={item.images} hotID={item.id} /></a></Link>
              <div className="d-flex justify-content-between">
              <h3><Link href='/kkk'>{item.name}</Link></h3>
                <p>
                  <AiFillStar /> {item.rate}
                </p>
              </div>
              <p>details</p>
              <p>kkk</p>
              <p>price</p>
            </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Cards;
