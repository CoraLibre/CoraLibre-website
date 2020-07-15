import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import 'assets/stylesheets/styles.scss';

import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children, pageName, location }) => {

  let className = '';

  if ( pageName ) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className}}>
        <title>CoraLibre</title>
      </Helmet>
      <div className="wrapper">
        <Navigation location={location}/>
        <main>{ children }</main>
        <Footer />
      </div>
    </>
  );

};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;