import React from "react";
import logo from "../img/logo.png";
import search from "../img/search.png";

function Header(props) {
  return (
    <header className="youtube-header">
      {/* <FontAwesomeIcon icon="faBars" /> */}
      <a href="#">
        <img className="icon-logo" src={logo} alt="youtube" />
      </a>
      <span className="text-logo">YouTube</span>
      <input type="text" className="input-search" placeholder="Search.." />
      <span className="container-searchBtn">
        <button className="button-search">
          <img className="icon-search" src={search} alt="search" />
        </button>
      </span>
    </header>
  );
}

export default Header;
