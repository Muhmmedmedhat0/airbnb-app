import React from "react";
import Link from "next/link";
import style from "../../styles/content.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { BecomeHost } from "../../app/slices/hostSlice";

function Content(props) {
  // const hoteldata = useSelector((state) => state.hotel);
  const userId= useSelector((state)=>state.auth.user._id)

  const obj={
    id:userId,
      isAdmin: "host"
  }
  const dispatch = useDispatch();
  const tryHosting = () => {
    if(props.checkTry=="tryNow"){
    console.log(userId);
    dispatch(BecomeHost(obj));
    }
  };
  return (
    <div className={style.myDiv}>
      <header className={style.header}>{props.text}</header>

      <Link href={`${props.href}`}>
        <button
          className={style.btn}
          onClick={() => {
            tryHosting();
          }}
        >
          {props.btnText}
        </button>
      </Link>
    </div>
  );
}

export default Content;
