import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = props => {
  console.log(props.images);

  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
    // <img key={image.id} src={image.urls.regular} alt={image.description} />
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
