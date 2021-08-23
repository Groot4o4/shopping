import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const account = () => {
    history.push("/Signup");
  };

  return (
    <Container>
      <HomeContainer>
        <SignInContainer>
          <h2>Sign In</h2>

          <form>
            <Email type="text" placeholder="Username or Email" />
            <Password type="password" placeholder="Password" />
            <Check>
              <input type="checkbox" checked="checked" />
              <p>Keep me signed in</p>
            </Check>
            <SignInButton type="submit">
              <span>Sign In</span>
            </SignInButton>
          </form>

          <Options>Or</Options>
          <AccountButton onClick={account}>
            <span>Create an Account</span>
          </AccountButton>
        </SignInContainer>
        <ImgContainer>
          <Image src="/images/l1.png" />
        </ImgContainer>
      </HomeContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  overflow: hidden;
`;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignInContainer = styled.div`
  width: 40%;
  height: 80%;
  margin-top: 7%;
  display: flex;
  flex-direction: column;

  h2 {
    color: #3c3c3c;
  }

  @media (max-width: 800px) {
    width: 80%;
    height: 80%;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 80%;
  margin-top: 10%;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Email = styled.input`
  background: none;
  width: 50%;
  border: 2px solid #3c3c3c;
  padding: 15px;
  margin: 10px 0;
  @media (max-width: 800px) {
    width: 70%;
  }
`;

const Password = styled.input`
  background: none;
  border: 2px solid #3c3c3c;
  padding: 15px;
  width: 50%;
  margin: 10px 0;
  @media (max-width: 800px) {
    width: 70%;
  }
`;
const Check = styled.div`
  display: flex;
  align-items: center;

  p {
    color: #3c3c3c;
    font-weight: 600;
  }
`;

const SignInButton = styled.button`
  color: #ffffff;
  background-color: #3c3c3c;
  padding: 20px;
  border: none;
  margin-top: 20px;
  font-size: 15px;
  cursor: pointer;
  width: 56%;

  @media (max-width: 800px) {
    width: 76%;
  }
`;

const AccountButton = styled(SignInButton)`
  margin-top: 0%;
`;

const Options = styled.p`
  color: #3c3c3c;
  font-weight: 600;
  padding-left: 25%;
`;

const Image = styled.img``;
