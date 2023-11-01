import React, { useState } from "react";
import style from "../../src/styles/Gallery.module.css";




const Gallery = () => {
  const [images, setImages] = useState([
      "/assets/img3.jpg",
    "/assets/img1.jpg",
    "/assets/img2.jpg",
    "/assets/img4.jpg",
    "/assets/img5.jpg",
    "/assets/img6.jpg",
    "/assets/img7.jpg",
    "/assets/img8.jpg",
    "/assets/img9.jpg",
    "/assets/img10.jpg",
    "/assets/img11.jpg",
    "/assets/img12.jpg",
    "/assets/img13.jpg",
  ]);


  
  return (
   
    
    <div className={style.galleryContainer}>
      <div className={style.gallery}>
        {images.map((img, i) => (
          <img key={i} src={img} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
