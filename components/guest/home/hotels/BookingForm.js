import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import style from "../../../../styles/hotel.module.scss";
import { useDispatch } from "react-redux";
import {
  setEndDate,
  setGuests,
  setStartDate,
} from "../../../../app/slices/tripsSlice";

function BookingForm(props) {
  const dispatch = useDispatch();
  let [startDate, SetSDate] = useState("");
  let [endDate, setENDDate] = useState("");
  let [guest, setNguests] = useState("");
  const submitForm = () => {
    dispatch(setGuests(guest));
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
    // dispatch(setHotelInfo(props.hotelData))

  };
  return (
    <div className={`${style.bookinSection}`}>
      <div className="d-flex justify-content-between">
        <p>
          $182 <sub>night</sub>
        </p>
        <p>
          <span>
            <AiFillStar /> 4.61.{" "}
          </span>{" "}
          <Link href=""> 18 reviews </Link>
        </p>
      </div>
      <div className={style.formSection}>
        <form>
          <div className="d-flex flex-wrap">
            <div className="mb-3">
              <label htmlFor="checkInID" className="form-label">
                Check In
              </label>
              <input
                type="date"
                className="form-control"
                id="checkInID"
                required
                onChange={(e) => SetSDate(e.target.value)}
                placeholder="check in"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Check Out
              </label>
              <input
                type="date"
                required
                onChange={(e) => setENDDate(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setNguests(e.target.value)}
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <Link href={"/payment"}>
            <button
              onClick={() => {
                submitForm();
              }}
              className="btn btn-primary"
            >
              Check availability
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
