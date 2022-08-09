import Image from "next/image";
import React from "react";

function CardSlider({dumImg,hotID}) {
  const myLoader = ({ src, width, quality }) => {
    return `${src}`;
  };
  return (
    <div
      id={`carouselExampleIndicators${hotID}`}
      className="carousel slide"
      data-bs-ride="true"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target={`#carouselExampleIndicators${hotID}`}
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target={`#carouselExampleIndicators${hotID}`}
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target={`#carouselExampleIndicators${hotID}`}
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            loader={myLoader}
            src={dumImg[0]}
            // src="https://images.unsplash.com/photo-1645394865932-33c2878426e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1046&q=80"
            width="500"
            height="500"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          {" "}
          <Image
            loader={myLoader}
            src={dumImg[1]}   
            width="500"
            height="500"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <Image
            loader={myLoader}
            src="https://images.unsplash.com/photo-1645395591882-fd6c8eb9aa81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y292ZXJzJTIwc2VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width="500"
            height="500"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#carouselExampleIndicators${hotID}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#carouselExampleIndicators${hotID}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CardSlider;
