import React, { useState } from "react";
import style from "../../src/styles/Gallery.module.css";

const Gallery = () => {
  const [images, setImages] = useState([
    "/assets/img2.jpg",
    "/assets/img1.jpg",
    "/assets/img3.jpg",
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
    "/assets/img14.jpg",
    "/assets/img15.jpg",
    "/assets/img16.jpg",
    "/assets/img17.jpg",
    "/assets/img18.jpg",
    "/assets/img19.jpg",
    "/assets/img20.jpg",
    "/assets/img21.jpg",
  ]);

  const [selectedImages, setSelectedImages] = useState([]);
  

  const toggleImageSelection = (index) => {
    const isSelected = selectedImages.includes(index);
    if (isSelected) {
      setSelectedImages(selectedImages.filter((i) => i !== index));
    } else {
      setSelectedImages([...selectedImages, index]);
    }
  };

  const deleteSelectedImages = () => {
    const updatedImages = images.filter(
      (_, index) => !selectedImages.includes(index)
    );
    setImages(updatedImages);
    setSelectedImages([]);
  };

  return (
    <div className={style.galleryContainer}>
      {selectedImages.length > 0 && (
        <div className={style.deleteBtn}>
          <img src="/assets/trash.gif" onClick={deleteSelectedImages} alt="" />
          <p>Click the Bin to Delete</p>
        </div>
      )}
      <div className={style.gallery}>
        {images.map((img, i) => (
          <img
            src={img}
            alt=""
            className={`${selectedImages.includes(i) ? style.selected : ""}`}
            onClick={() => toggleImageSelection(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
