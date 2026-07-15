import React from "react";
import { NavLink } from "react-router-dom";
import "./CollectionsHomeSection.css";

const CollectionsHomeSection = () => {
  return (
    <div className="collections-home-section">
      this is collections
      <NavLink to="/corporate">
        <div>to collections btn</div>
      </NavLink>
    </div>
  );
};

export default CollectionsHomeSection;
