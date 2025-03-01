import React from "react";
import "./ImageDisplay.css";

const ImageDisplay = ({ src, alt }) => {
  return <img src={src} alt={alt} className="food-truck-image" />;
};

export default ImageDisplay;