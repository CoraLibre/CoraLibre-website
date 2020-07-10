import React from 'react';
import {Link} from "gatsby"

const Footer = () => {
    return (
        <div className="Footer-container">
            <h3>CoraLibre</h3>
            <Link to="/">Ziele</Link><br/>
            <Link to="/">Gründe</Link><br/>
            <Link to="/">Unterstützung</Link><br/>
            <Link to="/">Kontakt</Link><br/>
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