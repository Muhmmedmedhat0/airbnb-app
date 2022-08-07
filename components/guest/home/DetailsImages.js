import React from "react";
import Image from "next/image";
import style from "../../../styles/hotel.module.scss";
import ImageComponent from "../../shared/ImageComponent";

function DetailsImages() {
  
  return (
    <div className={`${style.imagesSection} d-flex  justify-content-between`}>
      <div className={`${style.mainImage}`}>
        <ImageComponent
          src="https://images.unsplash.com/photo-1645395591882-fd6c8eb9aa81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y292ZXJzJTIwc2VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          width="800"
          height="410"
        />
      </div>
      <div
        className={`${style.spiltImagesSection} d-flex flex-wrap justify-content-between`}
      >
        <div className={`${style.spiltImags}`}>
          <ImageComponent
            src="https://images.unsplash.com/photo-1645395591882-fd6c8eb9aa81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y292ZXJzJTIwc2VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width="280"
            height="140"
            />
        </div>
        <div className={`${style.spiltImags}`}>
          <ImageComponent
            src="https://images.unsplash.com/photo-1645395591882-fd6c8eb9aa81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y292ZXJzJTIwc2VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width="280"
            height="140"
           />
        </div>
        <div className={`${style.spiltImags}`}>
          <ImageComponent
            src="https://images.unsplash.com/photo-1645395591882-fd6c8eb9aa81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y292ZXJzJTIwc2VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width="280"
            height="140"
            />
        </div>
        <div className={`${style.spiltImags}`}>
          <ImageComponent
            src="https://images.unsplash.com/photo-1645395591882-fd6c8eb9aa81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y292ZXJzJTIwc2VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width="280"
            height="140"
           />
        </div>
      </div>
    </div>
  );
}

export default DetailsImages;
