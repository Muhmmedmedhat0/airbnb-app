import React, { useEffect } from "react";
import Link from "next/link";
import DetailsImages from "./DetailsImages";
import style from "../../../../styles/hotel.module.scss";
import BookingForm from "./BookingForm";
import HostDetailsInfo from "./HostDetailsInfo";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getRoom } from "../../../../app/slices/hotelSlice";
import { useRouter } from "next/router";
import { setHotelInfo } from "../../../../app/slices/tripsSlice";

function HotelDetsil(props) {
  const router = useRouter();
  const { id } = router.query;
  console.log("id", id);
  const hoteldata = useSelector((state) => state.hotel);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoom({ id: id }));
    console.log(hoteldata);
    dispatch(setHotelInfo(hoteldata.hotels.hotel));
  }, [hoteldata.hotels.hotel]);
  return (
    <div className={style.hotelDetails}>
      {console.log(props.Rid)}
      {console.log(hoteldata.hotels.hotel)}
      {hoteldata.hotels.hotel && (
        <div className="container">
          <div className={style.mainHotelInfo}>
            <h2>{hoteldata.hotels.hotel.title}</h2>
            <div
              className={` ${style.mainHotelInfoContent} d-flex justify-content-between`}
            >
              <p>
                <span>
                  <AiFillStar /> {hoteldata.hotels.hotel.rating}.
                </span>{" "}
                <p className="d-inline text-decoration-underline"> 18. reviews </p>
                <p className="d-inline text-decoration-underline"> {hoteldata.hotels.hotel.address}</p>
              </p>
              <p>
                <span>
                  {" "}
                  <IoShareOutline /> Share
                </span>{" "}
                <span>
                  <AiFillHeart />
                  Save
                </span>
              </p>
            </div>
          </div>
          <DetailsImages images={hoteldata.hotels.hotel.images} />
          <p>{hoteldata.hotels.hotel.name}</p>
          <div
            className={`${style.info} d-flex justify-content-between flex-wrap`}
          >
            <HostDetailsInfo />
            <div className="formContainer">
              <BookingForm   />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HotelDetsil;
