import React from "react";
import styled from "styled-components";

export default function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="src/assets/images/viewers-disney.png" alt="" />
        <video autoPlay loop playsInline>
          <source
            src="src/assets/videos/1564674844-disney.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>

      <Wrap>
        <img src="src/assets/images/viewers-pixar.png" alt="" />
        <video autoPlay loop playsInline>
          <source
            src="src/assets/videos/1564676714-pixar.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>

      <Wrap>
        <img src="src/assets/images/viewers-marvel.png" alt="" />
        <video autoPlay loop playsInline>
          <source
            src="src/assets/videos/1564676115-marvel.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>

      <Wrap>
        <img src="src/assets/images/viewers-starwars.png" alt="" />
        <video autoPlay loop playsInline>
          <source
            src="src/assets/videos/1608229455-star-wars.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>

      <Wrap>
        <img src="src/assets/images/viewers-national.png" alt="" />
        <video autoPlay loop playsInline>
          <source
            src="src/assets/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
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
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);
  overflow: hidden;

  img {
    display: block;
    height: 100%;
    width: 100%;
    //we add position:absolute & inset because of the padding-top of the Wrap
    position: absolute;
    inset: 0;
    object-fit: cover;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
    z-index: 1;
    top: 0;
  }

  video {
    height: 105%;
    width: 100%;
    position: absolute;
    inset: 0;
    object-fit: cover;
    opacity: 0;
    z-index: 0;
    top: -1px;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 72%) 0 30px 22px -10px;

    transform: scale(1.1);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;
