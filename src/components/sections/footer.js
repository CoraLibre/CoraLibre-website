import React from "react"
import styled from "styled-components"

import {Container} from "../global"

const Footer = () => (
    <FooterWrapper id="footer">
        <BrandContainer>
            <Paragraph>
                1. Datenschutz auf dieser Webseite<br/>
                Wir verwenden auf dieser Webseite keine Cookies. Auch Zählpixel bzw. Webbugs oder JavaScripts, die zum
                BenutzerInnentracking dienen, werden nicht eingesetzt.
            </Paragraph>
            <Paragraph>
                Serverbetreiber der Webseite ist der externe Dienstleister GitHub. Um die Kommunikation zwischen dem
                Browser des/r Aufrufenden und dieser Webseite zu ermöglichen, muss der Server des Dienstleisters insb.
                die IP-Adresse, mit der der/die AufruferIn auf unsere Webseite zugreift, verarbeiten. Das "Privacy
                Statement" von GitHub findet sich <a target="_blank" href="https://help.github.com/en/github/site-policy/github-privacy-statement." rel="noopener noreferrer">hier</a>.

            </Paragraph>
            <Paragraph>
                2. E-Mail-Kommunikation<br/>
                Auch unser E-Mail-Server wird von einem externen Dienstleister betrieben, der E-Mails für uns empfängt,
                vorhält und verschickt.
            </Paragraph>
            <small>© CoraLibre {new Date().getFullYear()}</small>
        </BrandContainer>
    </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const Paragraph = styled.p`
  font-family: ${props => props.theme.font.light};
  ${props => props.theme.font_size.xsmall};
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 1em;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`

export default Footer
