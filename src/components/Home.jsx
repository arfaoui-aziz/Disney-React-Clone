import React from "react";
import styled from "styled-components";

const Home = (props) => {
  return (
    <Container>
      <h2>Home</h2>
      <h2>Home</h2>
      <h2>Home</h2>
      <h2>Home</h2>
      <h2>Home</h2>
      <h2>Home</h2>
      <h2>Home</h2>
      <h2>Home</h2>
      <h2>Home</h2>
      <h2>Home</h2>
      <h2>Home</h2>
      <h2>Home</h2>
      <h2>Home</h2>
      <h2>Home</h2>
      <h2>Home</h2>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &::after {
    content: "";
    background: url("src/assets/images/home-background.png") center center /
      cover no-repeat fixed;
    position: absolute;
    display: block;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;