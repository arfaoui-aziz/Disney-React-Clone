import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  setSignOutState,
  setUserLoginDetails,
  selectActiveUser,
} from "../features/user/userSlice";
import { auth, provider } from "../firebase";

const Header = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { name, email, photo } = useSelector(selectActiveUser);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);

        history.push("/home");
      }
    });
  }, [name]);

  const handleAuth = () => {
    if (!name) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((error) => console.log(error.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <NavBar>
      <Logo>
        <img src="src/assets/images/logo.svg" alt="Logo Disney+" />
      </Logo>

      {!name ? (
        <LoginButton onClick={handleAuth}>Login</LoginButton>
      ) : (
        <>
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

          <SignOut>
            <UserImg src={photo} alt="user Image" />
            <ArrowUp />
            <DropDown>
              <span onClick={handleAuth}>SignOut</span>
            </DropDown>
          </SignOut>
        </>
      )}
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
      transform: scale(1);
      transform-origin: left;
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
      transform: scale(0);
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
  margin-left: auto;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
  display: block;
  border-radius: 50%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 /50%) 0 0 18px 0;
  padding: 10px 20px;
  font-size: 14px;
  letter-spacing: 3px;
  opacity: 0;
  transition: background 0.2s;
  margin-top: 13px;
  &:hover {
    background-color: rgba(19, 19, 19, 0.726);
  }
`;

const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  margin-top: 6px;
  border-bottom: 7px solid #f9f9f9;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  margin-left: auto;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
    ${ArrowUp} {
      opacity: 1;
      transition-duration: 0.7s;
    }
  }
`;

export default Header;
