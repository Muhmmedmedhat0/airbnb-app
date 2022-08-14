import React from "react";
import { useSelector } from "react-redux";
import style from "../../../../styles/dashboard.module.scss";
import ImageComponents from "../../../shared/ImageComponent";

function HostDashboard() {
  let usersHotels = useSelector((state) => state.host.hotels);
  return (
    <>
      <div className={style.bg}>Host Dashboard</div>
      <div className={style.Mycontainer}>
        {console.log(usersHotels)}
          {usersHotels.length ? (
            <>
              {usersHotels.map((hotel, index) => (
                <div key={index} className={`${style.cardDiv} flex-wrap`}>
                 {/* <ImageComponents
                    //src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=11e949fc5d06576bc8b80ec192896753"
                   src={hotel.images?hotel.images[0]:""}
                    width="100"
                    height="110"
                  />*/}
                  <p className={style.para}>{hotel.title}</p>
                  <p className={style.para}>Type: {hotel.type}</p>
                  <p className={style.para}>Price: {hotel.cheapestPrice}$</p>
                  <p className={style.para}>Distance: {hotel.distance}</p>
                </div>
              ))}
            </>
          ) : (
            <>
              <p className="fs-1">Try hosting now</p>
              <hr></hr>
            </>
          )}
      </div>
    </>
  );
}

export default HostDashboard;
