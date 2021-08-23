import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>ABOUT</Heading>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Press</FooterLink>
          </Column>
          <Column>
            <Heading>HELP</Heading>
            <FooterLink href="#">Payment</FooterLink>
            <FooterLink href="#">Shipping</FooterLink>
            <FooterLink href="#">Report</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
          </Column>
          <Column>
            <Heading>POLICY</Heading>
            <FooterLink href="#">Return Policy</FooterLink>
            <FooterLink href="#">Terms Of Use</FooterLink>
            <FooterLink href="#">Security</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
          </Column>
          <Column>
            <Heading>SOCIAL</Heading>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">Twitter</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;

export const Box = styled.div`
  background: #474747;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #00c3ff;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #9c9c9c;
  margin-bottom: 40px;
  font-weight: bold;
`;
