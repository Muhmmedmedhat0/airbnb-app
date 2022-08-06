import React from "react";
import ImageComponent from "../../shared/ImageComponent";
import DetailsImages from "./DetailsImages";

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
      <div >
        <div className="">
          <p>Island hosted by Ian</p>
          <p>2 guests1 bedroom1 bed1 bath</p>
        </div>
        <div>
          <ImageComponent src="/assets/avaters/blank.png" width='50' height='50'/>
        </div>
      </div>
    </div>
  );
}

export default HotelDetsil;
