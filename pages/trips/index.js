import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MainNav from "../../components/guest/header/MainNav";
import CardSlider from "../../components/guest/home/CardSlider";
import Footer from "../../components/shared/footer/Footer";
import style from "../../styles/home.module.scss";

export default function Trips() {
  const getDates = (Hostdate1, hostdate2) => {
    const date1 = new Date(Hostdate1);
    const date2 = new Date(hostdate2);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  const tripsData = useSelector((state) => state.trips.tripAllInfo);
  console.log(tripsData);
  const [trip, setTrip] = useState(tripsData);
  return (
    <>
      <MainNav />
      <div className="container mt-3">
        <div className="row">
          <h1>Trips</h1>
        </div>
      </div>
      <hr />
      <div className={style.container}>
        <div className="d-flex flex-wrap justify-content-between">
          {trip ? (
            <>
              {trip.map((trip, index) => (
                <div key={index} className={style.homeCardBox}>
                  <CardSlider dumImg={trip.hotel.images} hotID="2" />
                  <div className="d-flex justify-content-between">
                    <h3>
                      <Link href={`/${trip.hotel._id}`}>{trip.hotel.name}</Link>
                    </h3>
                  </div>
                  <p>From : {trip.startDate} </p>
                  <p>To : {trip.endDate}</p>
                  <p>
                    Total :{" "}
                    {getDates(trip.startDate, trip.endDate) *
                      trip.hotel.cheapestPrice}{" "}
                    $
                  </p>
                </div>
              ))}
            </>
          ) : (
            <EmptyList />
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

const EmptyList = () => {
  return (
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
  );
};
