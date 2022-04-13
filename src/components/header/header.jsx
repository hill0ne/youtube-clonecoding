import React from "react";
import logo from "../../img/logo.png";
import search from "../../img/search.png";
import styles from "./header.module.css";

function Header(props) {
  function toSearch(e) {
    e.preventDefault();
    console.log("search");
  }

  return (
    <header className={styles.header}>
      <a href="#">
        <img className={styles.logo} src={logo} alt="youtube" />
      </a>
      <span className={styles.logoText} tabIndex="0">
        YouTube
      </span>
      <input type="text" className={styles.search} placeholder="Search.." />
      <span className={styles.containerBtn} tabIndex="0">
        <button className={styles.searchBtn} onClick={toSearch}>
          <img className={styles.searchIcon} src={search} alt="search" />
        </button>
      </span>
    </header>
  );
}

export default Header;
