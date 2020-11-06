import React from 'react'
import {Link, Trans} from 'gatsby-plugin-react-i18next'

const Footer = () => {
    return (
        <div className="Footer-container">
            <h3>
                <Link to="/">CoraLibre</Link>
            </h3>
            <hr className="line white-border-top"/>
            <p><small>
                <Link to="/privacy"><Trans>Impressum & Datenschutzerklärung</Trans></Link><br/>
                &copy; {new Date().getFullYear()} CoraLibre<br/>
            </small>
            </p>
        </div>
    );
};

export default Footer;