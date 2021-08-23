import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Details({ data }) {
  const { id } = useParams();

  return (
    <Container>
      {data
        .filter((datas) => datas.id === id)
        .map((datas) => (
          <Box key={id}>
            <Leftcontainer>
              <Imgwrap>
                <img alt="" src={datas.imgtwo} />
              </Imgwrap>
              <Btnwrap>
                <Cart>
                  <span>ADD TO CART</span>
                </Cart>
                <Buy>
                  <span>BUY NOW</span>
                </Buy>
              </Btnwrap>
            </Leftcontainer>
            <Rightcontainer>
              <Name>
                <h2>{datas.name}</h2>
              </Name>
              <Price>
                <h2>{datas.price}</h2>
              </Price>
              <Info>
                <ul>
                  <li>{datas.p1}</li>
                  <li>{datas.p2}</li>
                  <li>{datas.p3}</li>
                  <li>{datas.p4}</li>
                  <li>{datas.p5}</li>
                </ul>
              </Info>
              <Btninfo>
                <Moreinfo>
                  <span>Full Specifications</span>
                </Moreinfo>
              </Btninfo>
            </Rightcontainer>
          </Box>
        ))}
    </Container>
  );
}

export default Details;

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  background-color: white;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  margin-left: 5%;
  width: 90%;
  height: 85%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (max-width: 800px) {
    margin-top: 10%;
    display: grid;
    flex-direction: column;
  }
`;

const Leftcontainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 45%;

  @media (max-width: 800px) {
    height: 100%;
    width: 100%;
    align-items: center;
  }
`;

const Rightcontainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 55%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Imgwrap = styled.div`
  display: flex;
  height: 70%;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 6%;

  img {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 800px) {
    justify-content: center;
    img {
      width: 200px;
      height: 200px;
    }
  }
`;

const Btnwrap = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  height: 100px;
  margin-top: 5%;
`;
const Name = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  h2 {
    padding-top: 25px;
    padding-left: 20px;
  }

  @media (max-width: 800px) {
    h2 {
      font-size: 15px;
    }
  }
`;

const Price = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  align-items: center;
  h2 {
    padding-left: 20px;
  }
  @media (max-width: 800px) {
    h2 {
      font-size: 15px;
    }
  }
`;

const Info = styled.div`
  display: flex;
  height: 60%;
  width: 100%;

  li {
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 20px;
  }

  @media (max-width: 800px) {
    li {
      font-size: 15px;
    }
  }
`;

const Btninfo = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
`;

const Moreinfo = styled.button`
  color: #ffffff;
  background-color: #006eff;
  padding: 20px;
  margin: 15px;
  border: none;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  width: 36%;

  @media (max-width: 900px) {
    width: 150px;
    padding: 10px;
    font-size: 13px;
  }
`;

const Cart = styled(Moreinfo)`
  background-color: #ff9f00;
  font-weight: 600;
  @media (max-width: 800px) {
    width: 100px;
  }
`;

const Buy = styled(Moreinfo)`
  background-color: #fb641b;
  font-weight: 600;
  @media (max-width: 800px) {
    width: 100px;
  }
`;
