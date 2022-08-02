import React from "react";
import style from "../../../styles/filterNav.module.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";

function FilterNav() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 10 },
  };
  const myLoader = ({ src, width, quality }) => {
    return `https://a0.muscache.com/pictures/${src}`;
  };

  const items = [
    <div key={0} className="item" data-value="1">
      <Image
        loader={myLoader}
        src="8e507f16-4943-4be9-b707-59bd38d56309.jpg"
        width={30}
        height={30}
        alt="fkjjf"
      />
      <p>
Islands
</p>
    </div>,
    <div key={1} className="item" data-value="2">
      <Image
        loader={myLoader}
        src="10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
        width={30}
        height={30}
        alt="fkjjf"
      />
      <p>beach</p>
    </div>,
    <div key={2} className="item" data-value="3">
      <Image
        loader={myLoader}
        src="c0a24c04-ce1f-490c-833f-987613930eca.jpg"
        width={30}
        height={30}
        alt="fkjjf"
      />
      <p>

National parks

</p>
    </div>,
    <div key={3} className="item" data-value="4">
    <Image
        loader={myLoader}
        src="3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
        width={30}
        height={30}
        alt="fkjjf"
      />
      <p>
Amazing pools</p>
    </div>,
    <div key={4} className="item" data-value="5">
    <Image
        loader={myLoader}
        src="c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
        width={30}
        height={30}
        alt="fkjjf"
      />
    </div>,
    <div key={3} className="item" data-value="4">
    <Image
        loader={myLoader}
        src="35919456-df89-4024-ad50-5fcb7a472df9.jpg"
        width={30}
        height={30}
        alt="fkjjf"
      />
    </div>,
    <div key={4} className="item" data-value="5">
    <Image
        loader={myLoader}
        src="8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg"
        width={30}
        height={30}
        alt="fkjjf"
      />
    </div>,
    <div key={4} className="item" data-value="5">
    <Image
        loader={myLoader}
        src="50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"
        width={30}
        height={30}
        alt="fkjjf"
      />
    </div>,
    <div key={3} className="item" data-value="4">
    <Image
        loader={myLoader}
        src="52c8d856-33d0-445a-a040-a162374de100.jpg"
        width={30}
        height={30}
        alt="fkjjf"
      />
    </div>,
    <div key={4} className="item" data-value="5">
    <Image
        loader={myLoader}
        src="3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
        width={30}
        height={30}
        alt="fkjjf"
      />
    </div>,
    <div key={4} className="item" data-value="5">
    <Image
        loader={myLoader}
        src="3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
        width={30}
        height={30}
        alt="fkjjf"
      />
    </div>
  ];
  const handleDragStart = (e) => e.preventDefault();

  return (
  
    <div className="container ">
      <div className={`d-flex ${style.filterBox}`}>
        
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableDotsControls={true}
        controlsStrategy="alternate"
      />
      <p >filter</p>
      </div>
      
    </div>
  );
}

export default FilterNav;
