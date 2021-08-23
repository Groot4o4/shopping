import React from "react";
import styled from "styled-components";
function Signup() {
  return (
    <Container>
      <HomeContainer>
        <SignInContainer>
          <Row></Row>
          <h2>Sign Up</h2>
          <Row>
            <Col>
              <span>First Name</span>
              <Name type="text" placeholder="Enter your First Name" />
            </Col>
            <Col>
              <span>Last Name</span>
              <Name type="text" placeholder="Enter your Last Name" />
            </Col>
          </Row>
          <Row>
            <Col>
              <span>Email</span>
              <Email type="email" placeholder="Enter your E-mail" />
            </Col>
            <Col>
              <span>Phone Number</span>
              <Name type="text" placeholder="Enter your Phone Number" />
            </Col>
          </Row>
          <Row>
            <Col>
              <span>Password</span>
              <Email type="password" placeholder="Password" />
            </Col>
            <Col>
              <span>Confirm Password</span>
              <Name type="password" placeholder="Confirm Password" />
            </Col>
          </Row>
          <Row>
            <Col>
              <SignInButton>
                <span>Sign Up</span>
              </SignInButton>
            </Col>
          </Row>
        </SignInContainer>
      </HomeContainer>
    </Container>
  );
}

export default Signup;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
`;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignInContainer = styled.div`
  width: 80%;
  height: 100%;
  margin-top: 7%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: #3c3c3c;
    justify-content: center;
  }
  span {
    font-size: 15px;
    font-weight: 600;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Email = styled.input`
  background: none;
  width: 70%;
  border: 2px solid #3c3c3c;
  padding: 15px;
  margin: 10px 0;
`;

const Name = styled(Email)``;

const SignInButton = styled.button`
  color: #ffffff;
  background-color: #3c3c3c;
  padding: 20px;
  border: none;
  margin-top: 20px;
  font-size: 15px;
  cursor: pointer;
  width: 38%;
`;
