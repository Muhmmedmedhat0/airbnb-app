import React from "react";
import ImageComponent from "../../shared/ImageComponent";
import DetailsImages from "./DetailsImages";
import style from "../../../styles/hotel.module.scss";
import BookingForm from "./BookingForm";
import HostDetailsInfo from "./HostDetailsInfo";

function HotelDetsil() {
  const hotel = {
    id: 1,
    title: "njndj",
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
      <div className="container">
        <div>
          <h1>{hotel.title}</h1>
          <div className="d-flex justify-content-between">
            <p>
              <span>Rate 4.61</span> <span>18 reviews</span>
              <span>Skålen, Örebro län, Sweden</span>
            </p>
            <p>
              <span> Share</span> <span>Save</span>
            </p>
          </div>
        </div>
        <DetailsImages images={hotel.images} />
        <div
          className={`${style.info} d-flex justify-content-between flex-wrap`}
        >
          <HostDetailsInfo />
          <div className="">
            <BookingForm />
            <p>Report this listing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetsil;
