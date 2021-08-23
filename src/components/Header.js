import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <HeaderLeft>
        <p> Online Cart </p>
      </HeaderLeft>{" "}
      <HeaderRight>
        <RightSide>
          <Btn>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <p> Home </p>
            </Link>
          </Btn>
          <Btn>
            <Link
              to="/prodect"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p> Prodects </p>
            </Link>
          </Btn>
          <Btn>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p> About </p>{" "}
            </Link>
          </Btn>{" "}
          <Btn>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p> LogIn</p>{" "}
            </Link>
          </Btn>{" "}
          <Btn></Btn>
        </RightSide>{" "}
        <LogoRight>
          <CustomMenu onClick={() => setOpen(true)} />{" "}
        </LogoRight>{" "}
      </HeaderRight>
      <BurgerNav show={open}>
        <CloseWrapper>
          <CustomClose onClick={() => setOpen(false)} />{" "}
        </CloseWrapper>
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <p> Home </p>
          </Link>
        </li>{" "}
        <li>
          <Link
            to="/prodect"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p> Prodects </p>
          </Link>
        </li>{" "}
        <li>
          <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
            <p> About </p>{" "}
          </Link>
        </li>{" "}
        <li>
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <p> LogIn</p>{" "}
          </Link>
        </li>{" "}
      </BurgerNav>{" "}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(235, 234, 234);
  background-color: white;
  z-index: 2;
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px 20px;
  margin-right: 20px;

  p {
    padding-right: 10px;
    font-weight: 600;
    margin-right: 10px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;
const Btn = styled.div`
  cursor: pointer;
  p {
    text-decoration: none;
  }
`;

const LogoRight = styled.div`
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 501px) {
    display: none;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const HeaderLeft = styled.div`
  margin-left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  p {
    margin: 0 5px;
    font-weight: 750;
    font-size: 23px;
    cursor: pointer;
    color: #3c3c3c;
  }

  @media (max-width: 500px) {
    margin-left: 20px;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 250px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid #3c3c3c;
    cursor: pointer;
  }

  p {
    font-weight: 600;

    color: #3c3c3c;
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Header;
