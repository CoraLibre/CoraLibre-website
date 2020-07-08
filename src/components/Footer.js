import React from 'react';
import {Link} from "gatsby"

import Container from '../components/Container';

const Footer = () => {
    return (
        <footer>
            <Container>
                <p>&copy; {new Date().getFullYear()}, CoraLibre</p>
                <Link to="/datenschutz">Datenschutzerklärung</Link>
            </Container>
        </footer>
    );
};

export default Footer;