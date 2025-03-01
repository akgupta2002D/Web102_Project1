import React from "react";
import "./Button.css";

const Button = ({ menuLink }) => {
  return (
    <div className="button-container">
      <a href={menuLink} target="_blank" rel="noopener noreferrer">
        <button className="view-menu-button">View Menu</button>
      </a>
    </div>
  );
};

export default Button;