import React from "react";
import BaseNav from "../../../shared/navs/BaseNav";
import style from "../../../../styles/profile.module.scss";
import ImageComponent from "../../../shared/ImageComponent";
import {GrValidate} from 'react-icons/gr'
function UserProfile() {
  return (
    <>
      <BaseNav />
      <main className="container">
        <div className="d-flex">
          <section className={style.userProfile}>
            <div className="text-center mb-5 " >
              <ImageComponent  className="rounded-circle"
              style={{overflow:"hidden"}}
                src="/assets/avaters/blank.png"
                width="100"
                height="100"
              />
            </div>
            <GrValidate className="mb-4 fs-2"/>
            <h4 className="mb-4">Identity verification</h4>
            <p className="border-bottom mb-4 pb-3">
              Show others you&#39;re really you with the identity verification
              badge.
            </p>
          </section>
          <section>
            <h5>Hi, I&#39;m Mona</h5>
            <p>Joined in 2022</p>
            <p>Edit profile</p>

            <div></div>
            <div>
              <h5>0 reviews</h5>
              <p>Reviews by </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default UserProfile;
