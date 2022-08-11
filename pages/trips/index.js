import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MainNav from "../../components/guest/header/MainNav";
import CardSlider from "../../components/guest/home/CardSlider";
import Footer from "../../components/shared/footer/Footer";
import style from "../../styles/home.module.scss";

export default function Trips() {
  const tripsData = useSelector((state) => state.trips.tripMainInfo);
  console.log(tripsData);
  const [trip, setTrip] = useState(tripsData.hotel);
  return (
    <>
      <MainNav />
      <div className="container mt-3">
        <div className="row">
          <h1>Trips</h1>
        </div>
      </div>
      {console.log(trip) }
      <hr />
      {trip ? (
        <>
        {console.log(trip) }
          <div className={style.homeCardBox}>
            <div className={style.CardBoxHeartIcon}></div>
            <CardSlider dumImg={trip.images} hotID={trip.id} />
            <div className="d-flex justify-content-between">
              <h3>
                <Link href="/kkk">{trip.name}</Link>
              </h3>
            </div>
            <p>details</p>
            <p>kkk</p>
            <p>price</p>
          </div>
        </>
      ) : (
        <EmptyList />
      )}

      <Footer></Footer>
    </>
  );
}

const EmptyList = () => {
  return (
    <>
      {/* <hr></hr> */}
      <div className="px-4   rounded-3 ">
        <div className="container ">
          <div className="row">
            <h2>No trips booked...yet!</h2>
            <p className="text-muted ms-4">
              Time to dust off your bags and start planning your next adventure
            </p>
            <Link href={`/`}>
              <a>
                <button className="btn btn-white my-3 p-3 text-bold">
                  Start searching
                </button>
              </a>
            </Link>
            <hr></hr>
            <p>
              Can&#39;t find your reservation here?{" "}
              <a>
                <strong>Visit the Help Center</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
