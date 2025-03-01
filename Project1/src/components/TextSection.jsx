import React from "react";
import "./TextSection.css";

const TextSection = ({ name, cuisine }) => {
  return (
    <div className="food-truck-details">
      <h3 className="food-truck-name">{name}</h3>
      <p className="food-truck-cuisine">{cuisine}</p>
    </div>
  );
};

export default TextSection;