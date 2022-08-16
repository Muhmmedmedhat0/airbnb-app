import React from 'react';
import Link from 'next/link';
import style from '../../styles/content.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../app/slices/userSlice';

function Content(props) {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const data = {
    id: user._id,
    isAdmin: 'host',
  };
  const tryHosting = () => {
    if (props.checkTry == 'tryNow') {
      dispatch(updateUser(data));
    }
  };
  return (
    <div className={style.myDiv}>
      <header className={style.header}>{props.text}</header>

      <Link href={`${props.href}`}>
        <button className={style.btn} onClick={tryHosting}>
          {props.btnText}
        </button>
      </Link>
    </div>
  );
}

export default Content;
