import React from "react";
import { useRef } from "react";
import logo from "../../img/logo.png";
import search from "../../img/search.png";
import styles from "./header.module.css";

// 함수형 컴포넌트는 props를 받는 단일 컴포넌트이다.
// APP.jsx 에서 정의된 search 기능을 props로 받아온다.
// 함수형 컴포넌트는 리액트 요소를 반환한다.
function Header({ onSearch }) {
  const inputRef = React.useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    // 전달된 onSearch 함수에 받아온 Ref 값을 인자로 준다.
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <a href="#">
        <img className={styles.logo} src={logo} alt="youtube" />
      </a>
      <span className={styles.logoText} tabIndex="0">
        YouTube
      </span>
      <input
        ref={inputRef}
        type="text"
        className={styles.search}
        placeholder="Search.."
        onKeyUp={onKeyPress}
      />
      <span className={styles.containerBtn} tabIndex="0">
        <button className={styles.searchBtn} onClick={onClick}>
          <img className={styles.searchIcon} src={search} alt="search" />
        </button>
      </span>
    </header>
  );
}

export default Header;
