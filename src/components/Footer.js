import React from 'react'
import {Link} from "gatsby"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
    return (
        <div className="Footer-container">
            <h3>
                <Link to="/">CoraLibre</Link>
            </h3>
                <AnchorLink href="#reasons">Gründe</AnchorLink>
            <br/>
                <AnchorLink href="#goals">Ziele</AnchorLink>
            <br/>
                <AnchorLink href="#support">Unterstützung</AnchorLink>
            <br/>
                <AnchorLink href="#contact">Kontakt</AnchorLink>
            <br/>
            <hr className="Footer-line"/>
            <p><small>
                <Link to="/datenschutz">Datenschutzerklärung</Link><br/>
                &copy; {new Date().getFullYear()} CoraLibre<br/>
            </small>
            </p>
        </div>
    );
};

export default Footer;