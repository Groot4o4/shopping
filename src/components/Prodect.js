import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Prodect({ data }) {
  return (
    <Container>
      <WrapContainer>
        {data.map((datas) => (
          <Link
            key={datas.id}
            style={{ textDecoration: "none" }}
            to={`/details/${datas.id}`}
          >
            <Wrap>
              <Icon>
                <img alt="" src={datas.imgone} />
              </Icon>
              <Info>
                <Name> {datas.name}</Name>
                <Price>{datas.price}</Price>
              </Info>
            </Wrap>
          </Link>
        ))}
      </WrapContainer>
    </Container>
  );
}

export default Prodect;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;
const WrapContainer = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 15px;
  gap: 15px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 1250px) {
    display: grid;
    margin-left: 30px;
    margin-right: 30px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 900px) {
    display: grid;
    margin-left: 30px;
    margin-right: 30px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  display: flex;
  padding: 10px;
  cursor: pointer;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &:hover {
    transform: scale(1.02);
  }
`;

const Icon = styled.div`
  img {
    width: 120px;
    height: 188px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;
const Name = styled.h4`
  color: #3c3c3c;
`;
const Price = styled.h2`
  font-weight: 600;
  color: #3c3c3c;
`;
