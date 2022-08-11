import React, { useEffect, useState } from "react";
import style from "../../../styles/home.module.scss";
import CardSlider from "./CardSlider";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "../../../app/slices/hotelSlice";
import { setWishList } from "../../../app/slices/wishListSlice";
import Link from "next/link";


function Cards() {
  const hoteldata = useSelector((state) => state.hotel);
  const dispatch = useDispatch();
  const [filterData, setFilterData] = useState([]);
  const filterType = useSelector((state) => state.filterType.value);
  const wishListData = useSelector((state) => state.wishListData);
  useEffect(() => {
    dispatch(fetchHotels());
    setFilterData(hoteldata.hotels.hotels);
    if (filterType != "") {
      let searchVal = "hilton";
      let filterArr = hoteldata.hotels.hotels.filter((item) => {
        return item.type.toLowerCase().includes(`${searchVal}`);
      });
      setFilterData(filterArr);
    }
    else {
      let filterArr=hoteldata.hotels.hotels;  
      setFilterData(filterArr);

    }
  }, [hoteldata.hotels.hotels]);

  return (
    <>
      <div className={style.container}>
        <div className="d-flex flex-wrap justify-content-between">
          {/* {hoteldata.loading && (
            <div>
              <p>loading</p>
            </div>
          )} */}
          {/* {!hoteldata.loading &&hoteldata.error?<div><p>Error</p></div>:<div><p>null</p></div>} */}
          {/* {console.log(hoteldata.hotels)}
          {console.log("fknfjk", filterData)} */}

          {filterData&&
            filterData.map((hotel, index) => (
              <div key={hotel.id} className={style.homeCardBox}>
                <div className={style.CardBoxHeartIcon}>
                  <button onClick={()=>{
                    dispatch(setWishList(hotel))
                  }}>
                    <AiOutlineHeart />
                  </button>
                  {/* AiFillHeart */}
                </div>
                <Link href={`/rooms/${hotel.id}`}>
                  <CardSlider dumImg={hotel.images} hotID={index} />
                </Link>
                <div className={`d-flex justify-content-between ${style.pname}`}>
                  <h3>
                    <Link className={style.pname} href={`/rooms/${hotel._id}`}>{hotel.name}</Link>
                  </h3>
                  <p>
                    <AiFillStar /> {hotel.rating}
                  </p>
                </div>
                <p className={style.pnamee}>{hotel.type}</p>

                <p className={style.pnamee}>{hotel.desc}</p>
                <p></p>
                <p style={{fontWeight:"600"}}>
                  ${hotel.cheapestPrice} <span style={{fontWeight:"400"}} className="fs-6">night</span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
