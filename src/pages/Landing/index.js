import React from "react";

import * as LandingConfig from "./config";
import * as Styled from "./styles";

const Landing = () => {
  return (
    <Styled.Container>
      <Styled.MainTitle>
        Spotlight Recruitment Coding Challenges
      </Styled.MainTitle>
      <Styled.SubTitle>Select a challenge to get started</Styled.SubTitle>
      <Styled.ButtonsContainer>
        {LandingConfig.codingChallengeButtons.map((button) => (
          <Styled.ButtonContainer key={button.label}>
            <Styled.Button to={button.route}>{button.label}</Styled.Button>
          </Styled.ButtonContainer>
        ))}
      </Styled.ButtonsContainer>
    </Styled.Container>
  );
};

export default Landing;
