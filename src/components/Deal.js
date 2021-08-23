import React from "react";
import styled from "styled-components";
import LocalOfferTwoToneIcon from "@material-ui/icons/LocalOfferTwoTone";
function Deal() {
  return (
    <Container>
      <Deals>
        <LocalOfferTwoToneIcon />
        <h3>Upcoming Smartphones</h3>
      </Deals>

      <ServiceWrap>
        <Wrap>
          <img src="images/b1.jpg" alt="" />
        </Wrap>

        <Wrap>
          <img src="images/b2.jpg" alt="" />
        </Wrap>

        <Wrap>
          <img src="images/b3.jpg" alt="" />
        </Wrap>
      </ServiceWrap>
    </Container>
  );
}

export default Deal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const Deals = styled.div`
  height: 70px;
  margin-top: 30px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  box-shadow: rgb(0 0 0 /10%) 0px 16px 15px -10px;

  h3 {
    padding-left: 10px;
    font-weight: 700;
    font-size: 23px;
    cursor: pointer;
    color: #3c3c3c;
  }
`;

const ServiceWrap = styled.div`
  padding-top: 5px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding-bottom: 20px;

  @media (max-width: 720px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 430px;
  height: 300px;
  background-color: white;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgb(201, 201, 201);
  box-shadow: rgb(0 0 0 / 49%) 0px 16px 20px -5px,
    rgb(0 0 0 / 53%) 0px 10px 7px -5px;

  &:hover {
    box-shadow: rgb(0 0 0 / 50%) 0px 42px 38px -9px,
      rgb(0 0 0 / 42%) 0px 15px 12px -6px;
    transform: scale(1.02);
    border-color: rgb(0, 204, 255);
  }

  img {
    width: 430px;
    height: 305px;
  }

  @media (max-width: 1048px) {
    width: 350px;
    height: 200px;

    img {
      width: 350px;
      height: 210px;
    }
  }

  @media (max-width: 874px) {
    width: 300px;
    height: 190px;

    img {
      width: 300px;
      height: 200px;
    }
  }

  @media (max-width: 720px) {
    width: 350px;
    height: 225px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;

    img {
      width: 350px;
      height: 225px;
    }
  }
`;
