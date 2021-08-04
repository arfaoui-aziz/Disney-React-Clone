import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Recommends from "./Recommends";
import Viewers from "./Viewers";

const Home = (props) => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
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
