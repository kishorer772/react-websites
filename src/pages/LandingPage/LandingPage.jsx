import React from 'react';
import styled from 'styled-components';
import landingImage from '../../assets/images/landing-image.jpg';
const LandingPageContainer = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
`;

const HeroText = styled.p`
  color: white;
`;
const SolutionsText = styled.p`
  color: white;
  padding-inline: 1rem;
`;

const HeroContainer = styled.div`
  padding-inline: 1rem;
  width: 15%;
`;
const SolutionContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: start;
  padding-inline: 2rem;
`;
const ContactContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: end;
  padding-inline: 1rem;
`;
const ContactButton = styled.p`
  margin: 0.5rem;
  padding: 0.5rem;
  color: black;
  border-radius: 1rem;
  background-color: white;
  border: 1px solid white;
`;

const Container = styled.div`
  background-color: #ccd5ae;
  height: 100vh;
`;

const LandingImageSection = styled.div`
  position: absolute;
  width: 100%;
  height: 80%;
  background-position: fixed;
  background-image: url(${landingImage});
  background-size: cover; /* Adjust as needed */
  opacity: 0.5; /* Adjust the opacity as needed */
`;

const TextSection = styled.div`
  position: relative;
  z-index: 1;
  width: 50%;
`;

const Passage = styled.p`
  color: black;
  font-size: 1.2rem;
  padding-inline: 1rem;
  letter-spacing: 5px;
  font-weight: 500;
  position: relative;
  z-index: 1;
`;

const ServicesOffered = styled.div`
  display: flex;
  background-color: white;
  opacity: 0.4;
`;
const LandingPage = () => {
  return (
    <Container>
      <LandingPageContainer>
        <HeroContainer>
          <HeroText>Landing Page</HeroText>
        </HeroContainer>
        <SolutionContainer>
          <SolutionsText>Services</SolutionsText>
          <SolutionsText>Services</SolutionsText>
          <SolutionsText>Services</SolutionsText>
        </SolutionContainer>
        <ContactContainer>
          <ContactButton>Contact us</ContactButton>
        </ContactContainer>
      </LandingPageContainer>

      <LandingImageSection></LandingImageSection>
      <TextSection>
        <Passage>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
          tenetur fugiat laboriosam dignissimos illo accusamus fugit hic
          quibusdam sint harum iure nihil ex molestias error sequi facilis quia
          voluptatum ipsum.
        </Passage>
      </TextSection>
    </Container>
  );
};

export default LandingPage;
