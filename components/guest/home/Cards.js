import React, { useEffect, useState } from "react";
import style from "../../../styles/home.module.scss";
import CardSlider from "./CardSlider";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "../../../app/slices/hotelSlice";
import { setWishList } from "../../../app/slices/wishListSlice";
import Link from "next/link";

function Cards() {
  const hoteldata = useSelector((state) => state.hotel);
  const dispatch = useDispatch();
  const [filterData, setFilterData] = useState([]);
  const [heartColor, setHeartColor] = useState(false);
  const filterType = useSelector((state) => state.filterType.value);
  useEffect(() => {
    dispatch(fetchHotels());
    setFilterData(hoteldata.hotels.hotels);
    let filterArr = hoteldata.hotels.hotels;
    if (filterType != "") {
      let searchVal = filterType.toLowerCase();
       filterArr = hoteldata.hotels.hotels.filter((item) => {
        return item.type.toLowerCase().includes(`${searchVal}`);
      });
      setFilterData(filterArr);
    } else {
       filterArr = hoteldata.hotels.hotels;
      setFilterData(filterArr);
    }
  }, [hoteldata.hotels.hotels]);
  const addtoWishList = (hotel) => {
    dispatch(setWishList(hotel));
    setHeartColor(true);
  };
  return (
    <>
      <div className={style.container}>
        <div className="d-flex flex-wrap justify-content-between">
          {filterData &&
            filterData.map((hotel, index) => (
              <div key={hotel.id} className={style.homeCardBox}>
                <div className={style.CardBoxHeartIcon}>
                  <button
                    onClick={() => {
                      addtoWishList(hotel);
                    }}
                  >
                    {heartColor?(<AiFillHeart key={index}/>):(<AiOutlineHeart key={index} />)}
                  </button>
                </div>
                  <CardSlider dumImg={hotel.images} hotID={index} />
                <div
                  className={`d-flex justify-content-between ${style.pname}`}
                >
                  <h4>
                    <Link className={style.pname} href={`/rooms/${hotel._id}`}>
                      {hotel.name}
                    </Link>
                  </h4>
                  <p>
                    <AiFillStar /> {hotel.rating}
                  </p>
                </div>
                <p className={style.pnamee}>{hotel.type}</p>
                <p className={style.pnamee}>{hotel.distance}</p>
                <p style={{ fontWeight: "600" }}>
                  ${hotel.cheapestPrice}{" "}
                  <span style={{ fontWeight: "400" }} className="fs-6">
                    night
                  </span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
