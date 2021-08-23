import React from "react";
import ImgSlider from "./ImgSlider";
import styled from "styled-components";
import Deal from "./Deal";

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Deal />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  min-height: calc(100vh - 100px);
  position: relative;
  overflow-x: hidden;
`;
