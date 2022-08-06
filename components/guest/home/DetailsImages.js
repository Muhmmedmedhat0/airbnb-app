import React from "react";
import Image from "next/image";
import style from "../../../styles/hotel.module.scss";

function DetailsImages({ images }) {
  const myLoader = ({ src, width, quality }) => {
    return `${src}`;
  };

  return (
    <div className={`${style.imagesSection} d-flex flex-wrap justify-content-between`}>
      <div className={`${style.mainImage}`}>
        <Image
          loader={myLoader}
          src="https://images.unsplash.com/photo-1645395591882-fd6c8eb9aa81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y292ZXJzJTIwc2VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          width="700"
          height="400"
          className="d-block w-100"
          alt="..."
        />
      </div>
      <div
        className={`${style.spiltImagesSection} d-flex flex-wrap justify-content-between`}
      >
        <div className={`${style.spiltImags}`}>
          <Image
            loader={myLoader}
            src="https://images.unsplash.com/photo-1645395591882-fd6c8eb9aa81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y292ZXJzJTIwc2VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width="240"
            height="140"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className={`${style.spiltImags}`}>
          <Image
            loader={myLoader}
            src="https://images.unsplash.com/photo-1645395591882-fd6c8eb9aa81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y292ZXJzJTIwc2VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width="240"
            height="140"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className={`${style.spiltImags}`}>
          <Image
            loader={myLoader}
            src="https://images.unsplash.com/photo-1645395591882-fd6c8eb9aa81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y292ZXJzJTIwc2VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width="240"
            height="140"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className={`${style.spiltImags}`}>
          <Image
            loader={myLoader}
            src="https://images.unsplash.com/photo-1645395591882-fd6c8eb9aa81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y292ZXJzJTIwc2VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width="240"
            height="140"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}

export default DetailsImages;
