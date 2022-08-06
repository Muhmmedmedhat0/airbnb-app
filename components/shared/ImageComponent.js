import React from 'react'
import Image from "next/image";


export default function ImageComponent(props) {
    const myLoader = ({ src, width, quality }) => {
        return `${src}`;
      };    
  return (
    <Image
            loader={myLoader}
            src={props.src}
            width="240"
            height="240"
            className="d-block w-100"
            alt="..."
          />
        
  )
}
