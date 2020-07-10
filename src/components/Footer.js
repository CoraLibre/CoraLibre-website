import React from 'react';
import {Link} from "gatsby"

const Footer = () => {
    return (
        <footer>
                <p>&copy; {new Date().getFullYear()}, CoraLibre</p>
                <Link to="/datenschutz">Datenschutzerklärung</Link>
        </footer>
    );
};

export default Footer;