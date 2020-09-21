import React from 'react'
import {Link} from "gatsby"

const Footer = () => {
    return (
        <div className="Footer-container">
            <h3>
                <Link to="/">CoraLibre</Link>
            </h3>
            <hr className="line white-border-top"/>
            <p><small>
                <Link to="/datenschutz">Impressum & Datenschutzerklärung</Link><br/>
                &copy; {new Date().getFullYear()} CoraLibre<br/>
            </small>
            </p>
        </div>
    );
};

export default Footer;