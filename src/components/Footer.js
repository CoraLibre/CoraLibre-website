import React from 'react'
import {Link} from "gatsby"

const Footer = () => {
    return (
        <div className="Footer-container">
            <h3>
                <Link to="/">CoraLibre</Link>
            </h3>
                <Link to="/#reasons">Gründe</Link>
            <br/>
                <Link to="/#goals">Ziele</Link>
            <br/>
                <Link to="/#support">Unterstützung</Link>
            <br/>
                <Link to="/#contact">Kontakt</Link>
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