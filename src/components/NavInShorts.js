import React from "react";
import "./NavInShorts.css";
import HamburgerDrawer from "./HamburgerDrawer";

const NavInShorts = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        <HamburgerDrawer setCategory={setCategory} />
      </div>
      <img
        style={{ cursor: "pointer" }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height="80%"
        alt="inshorts"
      />
    </div>
  );
};
export default NavInShorts;
