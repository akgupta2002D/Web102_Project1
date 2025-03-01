import React from "react";
import ImageDisplay from "./ImageDisplay";
import TextSection from "./TextSection";
import Button from "./Button";
import "./Card.css";

const Card = ({ imageSrc, name, cuisine, menuLink }) => {
  return (
    <div className="food-truck-card">
      <ImageDisplay src={imageSrc} alt={name}/>
      <TextSection name={name} cuisine={cuisine} />
      <Button menuLink={menuLink}  />
    </div>
  );
};

export default Card;