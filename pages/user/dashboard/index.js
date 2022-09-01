import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import style from "../../../styles/dashboard.module.scss";
import HostNav from '../../../components/host/HostNav'
import { getUserId } from '../../../app/slices/auth/authSlice';

function Dashboard() {
  // const hotels = useSelector((state) => state.auth.user.hotels);
  const user = useSelector((state) => state.auth.user);
  console.log(user)
  const dispatch= useDispatch();
  useEffect(() => {
    const data={
      id:user._id
    }
    dispatch(getUserId(data));
  }, [data, dispatch]);
  // const hotels = useSelector((state) => state.auth.user.hotels);

  return (
    <>
    <HostNav/>
    <div className={style.bg}>Host Dashboard</div>
   </>

  )
}

export default Dashboard
