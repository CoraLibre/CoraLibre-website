import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

import 'assets/stylesheets/styles.scss';

import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({children, location}) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>CoraLibre — Eine freie Alternative zur deutschen Corona-Warn-App</title>
                <meta name="description"
                      content="Beschreibung"/>
                <meta name="keywords"
                      content="corona, app, download, entwickeln, entwicklung, corona-app, corona-warn-app, google, datenschutz, privatsphäre, opensource"/>
            </Helmet>
            <Navigation location={location}/>
            <div style={{
                margin: '0 auto',
                maxWidth: '1200px',
                padding: '1em 1.0875rem 1.45rem'
            }}>
                {children}
            </div>
            <Footer/>
        </div>
    );

};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;