import React, { useEffect, useState } from "react";
import style from "../../../styles/home.module.scss";
import CardSlider from "./CardSlider";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "../../../app/slices/hotelSlice";
import Link from "next/link";
function Cards() {
  const hoteldata = useSelector((state) => state.hotel);
  const dispatch = useDispatch();
  const [filterData, setFilterData] = useState([]);
  const filterType = useSelector((state) => state.filterType.value);

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

  const toggleItemToWishlist = async (item) => {
    const data = {};

    fetch("http://localhost:9000/api/hotels", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log("success"))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="container ">
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
                  <button onClick={() => toggleItemToWishlist()}>
                    <AiOutlineHeart />
                  </button>
                  {/* AiFillHeart */}
                </div>
                <Link href={`/rooms/${hotel.id}`}>
                  <CardSlider dumImg={hotel.images} hotID={index} />
                </Link>
                <div className="d-flex justify-content-between">
                  <h3>
                    <Link href={`/rooms/${hotel._id}`}>{hotel.name}</Link>
                  </h3>
                  <p>
                    <AiFillStar /> {hotel.rating}
                  </p>
                </div>
                <p>{hotel.type}</p>

                <p>{hotel.desc}</p>
                <p></p>
                <p>
                  {hotel.cheapestPrice} <sub className="fs-6">night</sub>
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
