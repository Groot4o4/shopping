import React from "react";
import styled from "styled-components";
function About() {
  return (
    <Container>
      <Text>
        <h2>About</h2>
      </Text>
    </Container>
  );
}

export default About;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Text = styled.div`
  width: 500px;
  height: 500px;

  h2 {
    margin: 230px;
  }
`;
