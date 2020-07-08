import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"

const Kontakt = () => (
    <StyledSection id="kontakt">
        <GetStartedContainer>
            <GetStartedTitle>Kontakt</GetStartedTitle>
            <Subtitle>Kontaktdaten</Subtitle>
        </GetStartedContainer>
    </StyledSection>
)

export default Kontakt

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`

const Subtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
  padding-top: 16px;
  font-size: 14px;
  color: ${props => props.theme.color.primary};
`
