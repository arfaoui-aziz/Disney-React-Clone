import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <NavBar>
      <Logo>
        <img src="src/assets/images/logo.svg" alt="Logo Disney+" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="src/assets/images/home-icon.svg" alt="HOME" />
          <span>HOME</span>
        </a>
        <a>
          <img src="src/assets/images/search-icon.svg" alt="SEARCH" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="src/assets/images/watchlist-icon.svg" alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="src/assets/images/original-icon.svg" alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="src/assets/images/movie-icon.svg" alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="src/assets/images/series-icon.svg" alt="SERIES" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <LoginButton>Login</LoginButton>
    </NavBar>
  );
};

const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #090b13;
  height: 60px;
  padding: 0 36px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  z-index: 100;
`;

const Logo = styled.a`
  width: 80px;
  max-height: 60px;
  display: inline-block;
  margin-top: -5px;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  /* margin-top: 15px; */
  margin-right: auto;
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 12px;

    &:not(:last-child) {
      margin-right: 10px;
    }

    &:hover span::before {
      width: 100%;
      opacity: 1;
    }
  }

  span {
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;

    &::before {
      content: "";
      background-color: currentColor;
      border-radius: 0 0 4px 4px;
      position: absolute;
      width: 0;
      opacity: 0;
      height: 2px;
      bottom: -6px;
      left: 0;
      transition: all 0.3s ease-in-out;
    }
  }
  img {
    min-width: 20px;
    height: 20px;
    display: block;
    margin-right: 7px;
  }
`;

const LoginButton = styled.button`
  /* margin-top: 15px; */
  padding: 10px 30px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

export default Header;
