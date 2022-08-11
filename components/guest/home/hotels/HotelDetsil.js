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

  const hotel = {
    id: 1,
    title: "Nature Observatory on Secluded Island",
    rate: 44,
    price: 555,
    images: [
      "https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/4f4e82b1-3270-4c5a-9628-83ab64ae8f58.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/fe2a079c-e2b3-4832-b814-5295abf411ea.jpg?im_w=720",
    ],
    desc: "fjbhhvbh  eifhbuwefw fiwbcuwj joen ",
    date: 7 - 7 - 2005,
  };

  return (
    <div className={style.hotelDetails}>
      {console.log(props.Rid)}
      {console.log(hoteldata.hotels.hotel)}
      {hoteldata.hotels.hotel && (
        <div className="container">
          <div className={style.mainHotelInfo}>
            <h2>{hotel.title}</h2>
            <div
              className={` ${style.mainHotelInfoContent} d-flex justify-content-between`}
            >
              <p>
                <span>
                  <AiFillStar /> 4.61.{" "}
                </span>{" "}
                <Link href=""> 18 reviews </Link>
                <Link href=""> Skålen, Örebro län, Sweden</Link>
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
          <DetailsImages images={hotel.images} />
          <p>{hoteldata.hotels.hotel.name}</p>
          <div
            className={`${style.info} d-flex justify-content-between flex-wrap`}
          >
            <HostDetailsInfo />
            <div className="formContainer">
              <BookingForm />

              {/* <p>Report this listing</p> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HotelDetsil;
