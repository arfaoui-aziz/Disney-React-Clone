import React from "react";
import styled from "styled-components";

export default function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="src/assets/images/viewers-disney.png" alt="" />
      </Wrap>

      <Wrap>
        <img src="src/assets/images/viewers-pixar.png" alt="" />
      </Wrap>

      <Wrap>
        <img src="src/assets/images/viewers-marvel.png" alt="" />
      </Wrap>

      <Wrap>
        <img src="src/assets/images/viewers-starwars.png" alt="" />
      </Wrap>

      <Wrap>
        <img src="src/assets/images/viewers-national.png" alt="" />
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 0 / 73%) 0 16px 10px -10px;
  transition: all 0.25s cubic-bezier(0.25, 046, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);
  cursor: pointer;
  overflow: hidden;
  position: relative;

  img {
    display: block;
    height: 100%;
    width: 100%;
    //we add position:absolute & inset because of the padding-top of the Wrap
    position: absolute;
    inset: 0;
    object-fit: cover;
  }
`;
